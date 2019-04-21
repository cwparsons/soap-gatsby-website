import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import { rhythm, headingFontFamily } from '../utils/typography';
import { textColor } from '../utils/colors';

export default function Header({ location }) {
	const { contentYaml } = useStaticQuery(graphql`
		{
			contentYaml {
				headerTitle
				headerSubtitle
			}
		}
	`);

	const rootPath = `${__PATH_PREFIX__}/`;
	const isHomepage = location.pathname === rootPath;

	const headerStyles = {
		fontFamily: headingFontFamily,
		fontWeight: 800,
		fontSize: 72,
		marginBottom: rhythm(1),
		marginTop: 0,
		textAlign: 'center'
	};

	const link = (
		<Link
			style={{
				color: textColor,
				textDecoration: 'none'
			}}
			to={'/'}
		>
			{contentYaml.headerTitle}
		</Link>
	);

	return (
		<header style={{ marginBottom: rhythm(5) }}>
			{isHomepage && contentYaml.headerTitle ? (
				<h1 style={headerStyles}>{link}</h1>
			) : (
				<div style={headerStyles}>{link}</div>
			)}

			{contentYaml.headerSubtitle ? (
				<div style={{ fontFamily: headingFontFamily, fontSize: 24, textAlign: 'center' }}>
					{contentYaml.headerSubtitle}
				</div>
			) : null}
		</header>
	);
}
