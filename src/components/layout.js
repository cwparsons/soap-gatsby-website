import React from 'react';

import { rhythm, bodyFontFamily } from '../utils/typography';
import SEO from './seo';
import Header from './header';

export default function Layout({ location, title, children }) {
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
			<Header location={location} />
			<main>{children}</main>
		</div>
	);
}
