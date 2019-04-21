import { createGlobalStyle } from 'styled-components';

import theme from '../utils/theme';

export default createGlobalStyle`
	body {
		background-color: ${theme.colors.purpleLight};
		margin: 0;
	}
`;
