import * as React from 'react';

import { graphql, useStaticQuery } from 'gatsby';

import { ISoapPost } from '../utils/fragments';
import { Layout } from '../components/Layout';
import { SoapRollup } from '../components/SoapRollup';

export default function PageIndex({ location }: { location: Location }) {
	const data = useStaticQuery(graphql`
		{
			contentYaml {
				...ContentYamlSchema
			}
			...SoapPosts
		}
	`);

	return (
		<Layout location={location} title={data.contentYaml.homepageTitle}>
			{data.allMarkdownRemark.edges.map(({ node }: { node: ISoapPost }) => (
				<SoapRollup key={node.fields.slug} node={node} />
			))}
		</Layout>
	);
}
