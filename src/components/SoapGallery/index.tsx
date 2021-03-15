import * as React from 'react';

import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

import * as S from './styles';

interface IGalleryImages {
	edges: {
		node: {
			childImageSharp: {
				gatsbyImageData: IGatsbyImageData;
			};
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
							gatsbyImageData(layout: FULL_WIDTH)
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
					? allFile.edges.map((image, index) => (
							<S.ImageWrapper key={`gallery-index-${index}-key`}>
								<GatsbyImage alt="" image={image.node.childImageSharp.gatsbyImageData} />
							</S.ImageWrapper>
					  ))
					: null}
			</S.Grid>
		</S.Wrapper>
	);
}
