import * as React from 'react';

import { graphql, useStaticQuery } from 'gatsby';

import { Layout } from '../components/Layout';

export default function PageIndex({ location }: { location: Location }) {
	const data = useStaticQuery(graphql`
		{
			contentYaml {
				...ContentYamlSchema
			}
		}
	`);

	return (
		<Layout location={location} title={data.contentYaml.homepageTitle}>
			<h1>Whoops, this resource is not found.</h1>
		</Layout>
	);
}
