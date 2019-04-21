import * as React from 'react';

import { Link, useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { IContentYaml } from '../utils/fragments';

//#region Styled components

const Wrapper = styled.header`
	margin-bottom: 3rem;
	text-align: center;

	@media ${props => props.theme.mediaQueries.sm} {
		margin-bottom: 5rem;
	}
`;

const Heading = styled.h1`
	font-family: ${props => props.theme.fontFamilies.heading};
	font-size: 4.5rem;
	margin-bottom: 1rem;
	margin-top: 0;
`;

const HeadingDiv = styled.div`
	font-family: ${props => props.theme.fontFamilies.heading};
	font-size: 4.5rem;
	font-weight: bold;
	margin-bottom: 1rem;
	margin-top: 0;
`;

const HeadingLink = styled(Link)`
	color: ${props => props.theme.colors.black};
	text-decoration: none;

	&:focus,
	&:hover {
		color: ${props => props.theme.colors.purple};
	}
`;

const Subtitle = styled.div`
	font-family: ${props => props.theme.fontFamilies.heading};
	font-size: 1.5rem;
`;

//#endregion

export default function Header({ location }: { location: Location }) {
	const { contentYaml } = useStaticQuery<{ contentYaml: IContentYaml }>(graphql`
		{
			contentYaml {
				...ContentYamlSchema
			}
		}
	`);

	const isHomepage = location.pathname === '/';

	const link = <HeadingLink to={'/'}>{contentYaml.headerTitle}</HeadingLink>;

	return (
		<Wrapper>
			{isHomepage && contentYaml.headerTitle ? (
				<Heading>{link}</Heading>
			) : (
				<HeadingDiv>{link}</HeadingDiv>
			)}

			{contentYaml.headerSubtitle ? <Subtitle>{contentYaml.headerSubtitle}</Subtitle> : null}
		</Wrapper>
	);
}
