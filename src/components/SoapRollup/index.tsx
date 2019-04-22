import * as React from 'react';

import { useStaticQuery, graphql } from 'gatsby';
import { Location } from '@reach/router';
import Img from 'gatsby-image';

import { ISoapPost } from '../../utils/fragments';
import * as S from './styles';

function NotCurrentLink({ children, to }: { children: React.ReactNode; to: string }) {
	return (
		<Location>
			{locationProps =>
				locationProps.location.pathname !== to ? (
					<S.LinkStyled to={to}>{children}</S.LinkStyled>
				) : (
					<>{children}</>
				)
			}
		</Location>
	);
}

export function SoapRollup({ children, node }: { children?: React.ReactNode; node: ISoapPost }) {
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
					<NotCurrentLink to={node.fields.slug}>
						<Img fluid={node.frontmatter.image.childImageSharp.fluid} />
					</NotCurrentLink>
				</S.ImageWrapper>
			</S.ImageColumn>
			<S.TextColumn>
				<S.Heading>
					<NotCurrentLink to={node.fields.slug}>
						<div>
							<S.Title>{node.frontmatter.title}</S.Title>
						</div>
					</NotCurrentLink>

					{node.frontmatter.subtitle ? (
						<div>
							<S.Subtitle>{node.frontmatter.subtitle}</S.Subtitle>
						</div>
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
