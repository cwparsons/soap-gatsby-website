// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			black: string;
			purpleLight: string;
			purple: string;
			purpleDark: string;
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
	}
}
