import * as React from 'react';

import { useStaticQuery, graphql } from 'gatsby';
import { Location } from '@reach/router';
import { GatsbyImage } from 'gatsby-plugin-image';
import { GatsbyLinkProps } from 'gatsby-link';

import { ISoapRecipe } from '../../utils/fragments';
import * as S from './styles';

function NotCurrentLink({
	children,
	props
}: {
	children: React.ReactNode;
	props: any; // Should instead be `GatsbyLinkProps` but Gatsby types are invalid.
}) {
	return (
		<Location>
			{(locationProps) =>
				props.to && locationProps.location.pathname !== props.to ? (
					<S.LinkStyled {...props}>{children}</S.LinkStyled>
				) : (
					<>{children}</>
				)
			}
		</Location>
	);
}

export function SoapRollup({ children, node }: { children?: React.ReactNode; node: ISoapRecipe }) {
	const { contentYaml } = useStaticQuery(graphql`
		{
			contentYaml {
				...ContentYamlSchema
			}
		}
	`);

	return (
		<S.Wrapper key={node.fields.slug}>
			<S.ImageColumn>
				<S.ImageWrapper>
					<NotCurrentLink props={{ to: node.fields.slug }}>
						<GatsbyImage
							alt=""
							image={node.frontmatter.image.childImageSharp.gatsbyImageData}
						/>
					</NotCurrentLink>
				</S.ImageWrapper>
			</S.ImageColumn>
			<S.TextColumn>
				<S.Heading>
					<NotCurrentLink props={{ to: node.fields.slug }}>
						<S.Title>{node.frontmatter.title}</S.Title>
					</NotCurrentLink>

					{node.frontmatter.subtitle ? (
						<S.Subtitle>{node.frontmatter.subtitle}</S.Subtitle>
					) : null}
				</S.Heading>

				<S.Time>
					{contentYaml.datePrefixLabel} {node.frontmatter.date}.
				</S.Time>

				{children}
			</S.TextColumn>
		</S.Wrapper>
	);
}
