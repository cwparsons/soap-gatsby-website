import { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';

import { theme } from '../../utils/theme';

export const GlobalStyle = createGlobalStyle`
	${styledNormalize}

	body {
		background-color: ${theme.colors.light};
		font-size: 16px;
		margin: 0;
	}

	h1,
	h2,
	h3,
	h4 {
		font-family: ${theme.fontFamilies.heading};
	}

	a {
		color: ${theme.colors.dark};
		text-decoration: none;
		transition: color 100ms ease-in;
	}

	a:focus,
	a:hover {
		color: ${theme.colors.primary};
	}
`;
