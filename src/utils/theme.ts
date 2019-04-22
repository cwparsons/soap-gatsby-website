import 'typeface-cormorant-garamond';

export const theme = {
	colors: {
		black: '#111111',
		purpleLight: 'hsl(261, 45%, 97%)',
		purple: 'hsl(261, 45%, 40%)',
		purpleDark: 'hsl(261, 45%, 20%)'
	},
	fontFamilies: {
		heading: 'Cormorant Garamond, serif',
		body: 'Helvetica Neue, Roboto, Open Sans, Helvetica, Arial, sans-serif'
	},
	lineHeight: {
		heading: 1,
		body: 1.5
	},
	mediaQueries: {
		sm: '(min-width: 30rem)'
	},
	textUnderline: ''
};

theme.textUnderline = `
	box-shadow: inset 0 -1px 0 0 ${theme.colors.purpleLight},
		inset 0 -3px 0 0 ${theme.colors.black};
	text-shadow: 1px 1px 0 ${theme.colors.purpleLight},
		-1px 1px 0 ${theme.colors.purpleLight},
		2px 0 0 ${theme.colors.purpleLight},
		-2px 0 0 ${theme.colors.purpleLight};

	:hover {
		box-shadow: inset 0 -1px 0 0 ${theme.colors.purpleLight},
			inset 0 -3px 0 0 ${theme.colors.purple};
		text-shadow: 1px 1px 0 ${theme.colors.purpleLight},
			-1px 1px 0 ${theme.colors.purpleLight},
			2px 0 0 ${theme.colors.purpleLight},
			-2px 0 0 ${theme.colors.purpleLight};
	}
`;
