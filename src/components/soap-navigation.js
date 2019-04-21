import React from 'react';

import { Link } from 'gatsby';
import { textColor } from '../utils/colors';
import { rhythm } from '../utils/typography';

export default function SoapNavigation({ previous, next }) {
	const linkStyle = {
		color: textColor,
		textDecoration: 'none'
	};

	return (
		<>
			<hr
				style={{
					borderBottom: '1px solid black',
					borderTop: 0,
					marginBottom: rhythm(3),
					marginTop: rhythm(3)
				}}
			/>
			<ul
				style={{
					display: `flex`,
					flexWrap: `wrap`,
					justifyContent: `space-between`,
					listStyle: `none`,
					padding: 0
				}}
			>
				<li>
					{previous && (
						<Link style={linkStyle} to={previous.fields.slug} rel="prev">
							← {previous.frontmatter.title}
						</Link>
					)}
				</li>
				<li>
					{next && (
						<Link style={linkStyle} to={next.fields.slug} rel="next">
							{next.frontmatter.title} →
						</Link>
					)}
				</li>
			</ul>
		</>
	);
}
