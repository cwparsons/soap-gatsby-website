import { Link, useStaticQuery, graphql } from 'gatsby';
import { Location } from '@reach/router';
import Img from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';

//#region Styled components

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 2rem;

	@media ${props => props.theme.mediaQueries.sm} {
		flex-direction: row;
		flex-wrap: wrap;
		margin-top: 4rem;
	}
`;

const ImageContainer = styled.div`
	flex: 1;
	width: 100%;

	@media ${props => props.theme.mediaQueries.sm} {
		margin-right: 2rem;
		margin-top: 2rem;
		max-width: 18rem;
	}
`;

const TextContainer = styled.div`
	flex: 1;
	margin-top: 2rem;
`;

const Heading = styled.h2`
	flex: 1;
	font-family: ${props => props.theme.fontFamilies.heading};
	font-size: 3rem;
	line-height: ${props => props.theme.lineHeight.heading};
	margin-bottom: 2rem;
	margin-top: 0;
`;

const LinkStyled = styled(Link)`
	color: ${props => props.theme.colors.black};
	text-decoration: none;

	&:focus,
	&:hover {
		color: ${props => props.theme.colors.purple};
	}
`;

const Subtitle = styled.span`
	display: block;
	font-size: 1.5rem;
	font-weight: normal;
`;

const Time = styled.time`
	display: block;
	margin-bottom: 3rem;
	margin-top: 0;
`;

//#endregion

function LinkTest({ children, to }) {
	return (
		<Location>
			{locationProps =>
				locationProps.location.pathname !== to ? (
					<LinkStyled to={to}>{children}</LinkStyled>
				) : (
					<>{children}</>
				)
			}
		</Location>
	);
}

export default function SoapRollup({ children, node }) {
	const { contentYaml } = useStaticQuery(graphql`
		{
			contentYaml {
				...ContentYamlSchema
			}
		}
	`);

	return (
		<Wrapper key={node.fields.slug}>
			<ImageContainer>
				<LinkTest to={node.fields.slug}>
					<Img fluid={node.frontmatter.image.childImageSharp.fluid} />
				</LinkTest>
			</ImageContainer>

			<TextContainer>
				<Heading>
					<LinkTest to={node.fields.slug}>
						{node.frontmatter.title}

						{node.frontmatter.subtitle ? (
							<Subtitle>{node.frontmatter.subtitle}</Subtitle>
						) : null}
					</LinkTest>
				</Heading>

				<Time>
					{contentYaml.datePrefixLabel} {node.frontmatter.date}
				</Time>

				{children}
			</TextContainer>
		</Wrapper>
	);
}
