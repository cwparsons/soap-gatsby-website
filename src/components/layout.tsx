import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import Header from '.';
import GlobalStyle from './global-style';
import SEO from './seo';
import theme from '../utils/theme';

//#region Styled components

const Wrapper = styled.div`
	font-family: ${props => props.theme.fontFamilies.body};
	margin-left: auto;
	margin-right: auto;
	max-width: 48rem;
	padding: 3rem 1rem;

	@media ${props => props.theme.mediaQueries.sm} {
		padding: 5rem 2rem;
	}
`;

//#endregion

export default function Layout({
	children,
	location,
	title
}: {
	children: React.ReactNode;
	location: Location;
	title: string;
}) {
	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Wrapper>
					<SEO title={title} />

					<Header location={location} />

					<main>{children}</main>
				</Wrapper>
			</ThemeProvider>
		</>
	);
}
