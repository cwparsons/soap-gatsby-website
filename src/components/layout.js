import React from 'react';
import { Link } from 'gatsby';

import { rhythm, headingFontFamily, bodyFontFamily } from '../utils/typography';
import { textColor } from '../utils/colors';
import SEO from './seo';

export default function Layout({ location, title, children }) {
	const rootPath = `${__PATH_PREFIX__}/`;
	const isHomepage = location.pathname === rootPath;

	const headerStyles = {
		fontFamily: headingFontFamily,
		fontWeight: 800,
		fontSize: 72,
		marginBottom: rhythm(5),
		marginTop: rhythm(0),
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
			{title}
		</Link>
	);

	return (
		<div
			style={{
				fontFamily: bodyFontFamily,
				marginLeft: 'auto',
				marginRight: 'auto',
				maxWidth: rhythm(64),
				padding: `${rhythm(5)}px ${rhythm(2)}px`
			}}
		>
			<SEO title={title} />
			<header>
				{isHomepage ? (
					<h1 style={headerStyles}>{link}</h1>
				) : (
					<div style={headerStyles}>{link}</div>
				)}
			</header>
			<main>{children}</main>
		</div>
	);
}
