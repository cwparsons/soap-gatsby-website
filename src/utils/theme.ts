import 'typeface-cormorant-garamond';

export const theme = {
	colors: {
		dark: '#111111',
		light: '#fff',
		primary: 'hsl(261, 45%, 40%)'
	},
	fontFamilies: {
		heading: 'Cormorant Garamond, serif',
		body:
			'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif'
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
	box-shadow: inset 0 -1px 0 0 ${theme.colors.light},
		inset 0 -3px 0 0 ${theme.colors.dark};
	text-shadow: 1px 1px 0 ${theme.colors.light},
		-1px 1px 0 ${theme.colors.light},
		2px 0 0 ${theme.colors.light},
		-2px 0 0 ${theme.colors.light};

	:hover {
		box-shadow: inset 0 -1px 0 0 ${theme.colors.light},
			inset 0 -3px 0 0 ${theme.colors.primary};
		text-shadow: 1px 1px 0 ${theme.colors.light},
			-1px 1px 0 ${theme.colors.light},
			2px 0 0 ${theme.colors.light},
			-2px 0 0 ${theme.colors.light};
	}
`;
