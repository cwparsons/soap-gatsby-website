import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import { Header } from '../Header';
import { GlobalStyle } from './global-style';
import { SEO } from '../Seo';
import { theme } from '../../utils/theme';

import * as S from './styles';

export function Layout({
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
				<S.Wrapper>
					<SEO title={title} />

					<Header location={location} />

					<main>{children}</main>
				</S.Wrapper>
			</ThemeProvider>
		</>
	);
}
