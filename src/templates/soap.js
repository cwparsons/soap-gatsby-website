import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { rhythm } from '../utils/typography';
import SoapNavigation from '../components/soap-navigation';
import SoapPost from '../components/soap-post';

export default function SoapTemplate({ data, location, pageContext }) {
	const post = data.markdownRemark;
	const siteTitle = data.site.siteMetadata.title;
	const { previous, next } = pageContext;

	return (
		<Layout location={location} title={siteTitle}>
			<SEO
				title={post.frontmatter.title}
				description={post.frontmatter.description || post.excerpt}
			/>

			<SoapPost {...post.frontmatter} post={post} />

			<hr
				style={{
					marginBottom: rhythm(3),
					marginTop: rhythm(3)
				}}
			/>

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
