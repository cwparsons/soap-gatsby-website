import React from 'react';

import './soap-post.css';

import { rhythm, headingFontFamily, headingLineHeight } from '../utils/typography';
import Img from 'gatsby-image';

export default function SoapPost({ date, image, post, subtitle, title }) {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
				flexWrap: 'wrap',
				marginTop: rhythm(-1)
			}}
		>
			<div style={{ minWidth: 300, marginRight: rhythm(2), marginTop: rhythm(2) }}>
				<Img fluid={image.childImageSharp.fluid} />
			</div>
			<div style={{ flex: 1, marginTop: rhythm(2) }}>
				<h1
					style={{
						flex: 1,
						fontFamily: headingFontFamily,
						fontSize: 48,
						lineHeight: headingLineHeight,
						marginBottom: rhythm(2),
						marginTop: 0
					}}
				>
					{title}

					{subtitle ? (
						<>
							<br />
							<span style={{ fontSize: 24 }}>{subtitle}</span>
						</>
					) : null}
				</h1>
				<time
					style={{
						display: `block`,
						marginBottom: rhythm(3),
						marginTop: rhythm(0)
					}}
				>
					{date}
				</time>
				<div className="soap-post" dangerouslySetInnerHTML={{ __html: post.html }} />
			</div>
		</div>
	);
}
