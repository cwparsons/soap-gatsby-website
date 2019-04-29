import * as React from 'react';

import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import * as S from './styles';

export function SoapGallery() {
	const { allFile } = useStaticQuery(graphql`
		{
			allFile(filter: { relativeDirectory: { regex: "/gallery/" } }) {
				totalCount
				edges {
					node {
						childImageSharp {
							fluid {
								...GatsbyImageSharpFluid_withWebp
							}
						}
					}
				}
			}
		}
	`);

	return (
		<S.Wrapper>
			<S.Heading>Gallery</S.Heading>
			<S.Grid>
				{allFile.edges && allFile.edges.length
					? allFile.edges.map((image: any) => (
							<S.ImageWrapper>
								<Img fluid={image.node.childImageSharp.fluid} />
							</S.ImageWrapper>
					  ))
					: null}
			</S.Grid>
		</S.Wrapper>
	);
}
