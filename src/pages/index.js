import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import SoapRollup from '../components/soap-rollup';

export default function PageIndex({ location }) {
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
			{data.allMarkdownRemark.edges.map(({ node }) => (
				<SoapRollup key={node.fields.slug} node={node} />
			))}
		</Layout>
	);
}
