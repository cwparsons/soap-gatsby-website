import * as React from 'react';

import { graphql, useStaticQuery } from 'gatsby';

import { ISoapRecipe } from '../utils/fragments';
import { Layout } from '../components/Layout';
import { SoapRollup } from '../components/SoapRollup';
import { SoapGallery } from '../components/SoapGallery';

export default function PageIndex({ location }: { location: Location }) {
	const data = useStaticQuery(graphql`
		{
			contentYaml {
				...ContentYamlSchema
			}
			...SoapRecipes
		}
	`);

	return (
		<Layout location={location} title={data.contentYaml.homepageTitle}>
			{data.allMarkdownRemark.edges.map(({ node }: { node: ISoapRecipe }) => (
				<SoapRollup key={node.fields.slug} node={node} />
			))}

			<SoapGallery />
		</Layout>
	);
}
