import * as React from 'react';

import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import * as S from './styles';
import { GatsbyImageSharpFluid } from '../../utils/fragments';

interface IGalleryImages {
	edges: {
		node: {
			childImageSharp: GatsbyImageSharpFluid;
		};
	}[];
}

export function SoapGallery() {
	const { allFile }: { allFile: IGalleryImages } = useStaticQuery(graphql`
		{
			allFile(filter: { relativeDirectory: { regex: "/gallery/" } }) {
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
					? allFile.edges.map(image => (
							<S.ImageWrapper key={image.node.childImageSharp.fluid.src}>
								<Img fluid={image.node.childImageSharp.fluid} />
							</S.ImageWrapper>
					  ))
					: null}
			</S.Grid>
		</S.Wrapper>
	);
}
