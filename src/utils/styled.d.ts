// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			dark: string;
			light: string;
			primary: string;
		};

		fontFamilies: {
			heading: string;
			body: string;
		};

		lineHeight: {
			heading: number;
			body: number;
		};

		mediaQueries: {
			sm: string;
		};

		textUnderline: string;
	}
}
