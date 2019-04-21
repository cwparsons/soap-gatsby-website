import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import SoapNavigation from '../components/soap-navigation';
import SoapPost from '../components/soap-post';

export default function SoapTemplate({ data, location, pageContext }) {
	const { previous, next } = pageContext;
	const node = data.markdownRemark;
	const siteTitle = data.site.siteMetadata.title;

	return (
		<Layout location={location} title={siteTitle}>
			<SEO
				description={node.frontmatter.description || node.excerpt}
				title={node.frontmatter.title}
			/>

			<SoapPost node={node} />

			<SoapNavigation previous={previous} next={next} />
		</Layout>
	);
}

export const pageQuery = graphql`
	query SoapBySlug($slug: String!) {
		site {
			...SiteSchema
		}
		markdownRemark(fields: { slug: { eq: $slug } }) {
			...SoapPostSchema
		}
	}
`;
