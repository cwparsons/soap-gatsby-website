import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import SoapNavigation from '../components/soap-navigation';
import SoapPost from '../components/soap-post';

export default function SoapTemplate({ data, location, pageContext }) {
	const { previous, next } = pageContext;
	const post = data.markdownRemark;
	const siteTitle = data.site.siteMetadata.title;

	return (
		<Layout location={location} title={siteTitle}>
			<SEO
				description={post.frontmatter.description || post.excerpt}
				title={post.frontmatter.title}
			/>

			<SoapPost {...post.frontmatter} post={post} />

			<SoapNavigation previous={previous} next={next} />
		</Layout>
	);
}

export const pageQuery = graphql`
	query SoapBySlug($slug: String!) {
		site {
			siteMetadata {
				title
				author
			}
		}
		markdownRemark(fields: { slug: { eq: $slug } }) {
			id
			excerpt(pruneLength: 160)
			html
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
`;
