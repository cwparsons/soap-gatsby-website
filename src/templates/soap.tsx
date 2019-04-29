import * as React from 'react';

import { graphql } from 'gatsby';

import { ISoapRecipe } from '../utils/fragments';
import { Layout } from '../components/Layout';
import { SEO } from '../components/Seo';
import { SoapNavigation } from '../components/SoapNavigation';
import { SoapRecipe } from '../components/SoapRecipe';

export default function SoapTemplate({
	data,
	location,
	pageContext
}: {
	data: any;
	location: Location;
	pageContext: { previous: ISoapRecipe; next: ISoapRecipe };
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

			<SoapRecipe node={node} />

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
			...SoapRecipeSchema
		}
	}
`;
