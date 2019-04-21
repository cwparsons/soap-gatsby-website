import { createGlobalStyle } from 'styled-components';

import theme from '../utils/theme';

const GlobalStyle = createGlobalStyle`
	body {
		background-color: ${theme.colors.purpleLight};
		margin: 0;
	}
`;

export default GlobalStyle;
