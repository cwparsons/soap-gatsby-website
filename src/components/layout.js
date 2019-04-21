import React from 'react';
import { Link } from 'gatsby';

import { rhythm, headingFontFamily, bodyFontFamily } from '../utils/typography';
import { textColor } from '../utils/colors';
import SEO from './seo';

export default function Layout({ location, title, children }) {
	const rootPath = `${__PATH_PREFIX__}/`;
	let header;

	if (location.pathname === rootPath) {
		header = (
			<h1
				style={{
					fontFamily: headingFontFamily,
					fontSize: 72,
					marginBottom: rhythm(5),
					marginTop: rhythm(0),
					textAlign: 'center'
				}}
			>
				<Link
					style={{
						color: textColor,
						textDecoration: 'none'
					}}
					to={'/'}
				>
					{title}
				</Link>
			</h1>
		);
	} else {
		header = (
			<h3>
				<Link
					style={{
						textDecoration: 'none',
						color: 'inherit'
					}}
					to={'/'}
				>
					{title}
				</Link>
			</h3>
		);
	}

	return (
		<div
			style={{
				fontFamily: bodyFontFamily,
				marginLeft: 'auto',
				marginRight: 'auto',
				maxWidth: rhythm(40),
				padding: `${rhythm(5)}px ${rhythm(2)}px`
			}}
		>
			<SEO title={title} />
			<header>{header}</header>
			<main>{children}</main>
		</div>
	);
}
