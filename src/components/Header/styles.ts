import { Link } from 'gatsby';
import styled from 'styled-components';

export const Wrapper = styled.header`
	margin-bottom: 3rem;

	@media ${props => props.theme.mediaQueries.sm} {
		margin-bottom: 5rem;
	}
`;

const headingStyle = `
	display: inline-block;
	font-size: 4.5rem;
	margin-bottom: 1rem;
	margin-top: 0;
`;

export const Heading = styled.h1`
	${headingStyle}
	${props => props.theme.textUnderline}
`;

export const HeadingDiv = styled.div`
	${headingStyle}
	${props => props.theme.textUnderline}

	font-family: ${props => props.theme.fontFamilies.heading};
	font-weight: bold;
`;

export const Subtitle = styled.div`
	font-family: ${props => props.theme.fontFamilies.heading};
	font-size: 1.5rem;
`;
