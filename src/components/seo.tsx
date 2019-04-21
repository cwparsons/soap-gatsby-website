import * as React from 'react';

import { useStaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';

type MetaProps = JSX.IntrinsicElements['meta'];

export default function SEO({
	description = '',
	keywords = [],
	lang = 'en',
	meta = [],
	title
}: {
	description?: string;
	keywords?: string[];
	lang?: string;
	meta?: MetaProps[];
	title: string;
}) {
	const { site } = useStaticQuery(
		graphql`
			{
				site {
					...SiteSchema
				}
			}
		`
	);

	const metaDescription = description || site.siteMetadata.description;

	return (
		<Helmet
			htmlAttributes={{
				lang
			}}
			title={title}
			titleTemplate={`%s | ${site.siteMetadata.title}`}
			meta={[
				{
					name: `description`,
					content: metaDescription
				},
				{
					property: `og:title`,
					content: title
				},
				{
					property: `og:description`,
					content: metaDescription
				},
				{
					property: `og:type`,
					content: `website`
				},
				{
					name: `twitter:card`,
					content: `summary`
				},
				{
					name: `twitter:creator`,
					content: site.siteMetadata.author
				},
				{
					name: `twitter:title`,
					content: title
				},
				{
					name: `twitter:description`,
					content: metaDescription
				}
			].concat(
				keywords.length > 0
					? {
							name: `keywords`,
							content: keywords.join(`, `)
					  }
					: []
			)}
		/>
	);
}
