import * as React from 'react';

import { graphql } from 'gatsby';

import { ISoapPost } from '../utils/fragments';
import { Layout } from '../components/Layout';
import { SEO } from '../components/Seo';
import { SoapNavigation } from '../components/SoapNavigation';
import { SoapPost } from '../components/SoapPost';

export default function SoapTemplate({
	data,
	location,
	pageContext
}: {
	data: any;
	location: Location;
	pageContext: { previous: ISoapPost; next: ISoapPost };
}) {
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
