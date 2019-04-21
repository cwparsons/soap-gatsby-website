import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import SoapRollup from '../components/soap-rollup';

export default function PageIndex({ location }) {
	const data = useStaticQuery(graphql`
		{
			contentYaml {
				homepageTitle
			}
			site {
				siteMetadata {
					title
				}
			}
			allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
				edges {
					node {
						excerpt
						fields {
							slug
						}
						frontmatter {
							date(formatString: "MMMM Do, YYYY")
							image {
								childImageSharp {
									fluid(maxWidth: 600) {
										...GatsbyImageSharpFluid_withWebp
									}
								}
							}
							subtitle
							title
						}
					}
				}
			}
		}
	`);

	return (
		<Layout location={location} title={data.contentYaml.homepageTitle}>
			{data.allMarkdownRemark.edges.map(({ node }, index) => {
				const title = node.frontmatter.title || node.fields.slug;

				return <SoapRollup key={title} index={index} node={node} {...node.frontmatter} />;
			})}
		</Layout>
	);
}
