import React from 'react';

import { Link } from 'gatsby';
import { rhythm, headingFontFamily, headingLineHeight } from '../utils/typography';
import Img from 'gatsby-image';
import { textColor } from '../utils/colors';

export default function SoapRollup({ index, node, title }) {
	const imageLeft = index % 2 === 0;

	return (
		<div
			key={node.fields.slug}
			style={{
				alignItems: 'center',
				display: 'flex',
				flexDirection: imageLeft ? 'row' : 'row-reverse',
				marginTop: rhythm(6)
			}}
		>
			<div
				style={{
					marginRight: imageLeft ? rhythm(2) : 0,
					marginLeft: imageLeft ? 0 : rhythm(2),
					minWidth: 300,
					width: 300
				}}
			>
				<Link to={node.fields.slug}>
					<Img fluid={node.frontmatter.image.childImageSharp.fluid} />
				</Link>
			</div>
			<div>
				<h2
					style={{
						flex: 1,
						fontFamily: headingFontFamily,
						fontSize: 48,
						lineHeight: headingLineHeight,
						marginBottom: rhythm(1),
						marginTop: 0
					}}
				>
					<Link
						style={{ color: textColor, textDecoration: 'none' }}
						to={node.fields.slug}
					>
						{title}
					</Link>
				</h2>
				<time>{node.frontmatter.date}</time>
			</div>
		</div>
	);
}
