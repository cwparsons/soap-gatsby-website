import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { rhythm, headingFontFamily, headingLineHeight } from '../utils/typography';
import { textColor } from '../utils/colors';

export default function SoapRollup({ index, node, subtitle, title }) {
	const { contentYaml } = useStaticQuery(graphql`
		{
			contentYaml {
				datePrefixLabel
			}
		}
	`);

	const imageLeft = index % 2 === 0;

	return (
		<div
			key={node.fields.slug}
			style={{
				display: 'flex',
				flexDirection: imageLeft ? 'row' : 'row-reverse',
				flexWrap: 'wrap',
				marginTop: rhythm(4)
			}}
		>
			<div
				style={{
					flex: '1',
					marginRight: imageLeft ? rhythm(2) : 0,
					marginLeft: imageLeft ? 0 : rhythm(2),
					marginTop: rhythm(2),
					maxWidth: 300
				}}
			>
				<Link to={node.fields.slug}>
					<Img fluid={node.frontmatter.image.childImageSharp.fluid} />
				</Link>
			</div>
			<div style={{ marginTop: rhythm(2), textAlign: imageLeft ? 'left' : 'right' }}>
				<h2
					style={{
						flex: 1,
						fontFamily: headingFontFamily,
						fontSize: 48,
						lineHeight: headingLineHeight,
						marginBottom: rhythm(2),
						marginTop: 0
					}}
				>
					<Link
						style={{ color: textColor, textDecoration: 'none' }}
						to={node.fields.slug}
					>
						{title}
						{subtitle ? (
							<>
								<br />
								<span
									style={{
										display: 'inline-block',
										fontSize: 24,
										fontWeight: 'normal'
									}}
								>
									{subtitle}
								</span>
							</>
						) : null}
					</Link>
				</h2>
				<time>
					{contentYaml.datePrefixLabel} {node.frontmatter.date}
				</time>
			</div>
		</div>
	);
}
