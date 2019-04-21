import { Link } from 'gatsby';
import styled from 'styled-components';

export const Wrapper = styled.header`
	margin-bottom: 3rem;
	text-align: center;

	@media ${props => props.theme.mediaQueries.sm} {
		margin-bottom: 5rem;
	}
`;

export const Heading = styled.h1`
	font-family: ${props => props.theme.fontFamilies.heading};
	font-size: 4.5rem;
	margin-bottom: 1rem;
	margin-top: 0;
`;

export const HeadingDiv = styled.div`
	font-family: ${props => props.theme.fontFamilies.heading};
	font-size: 4.5rem;
	font-weight: bold;
	margin-bottom: 1rem;
	margin-top: 0;
`;

export const HeadingLink = styled(Link)`
	color: ${props => props.theme.colors.black};
	text-decoration: none;

	&:focus,
	&:hover {
		color: ${props => props.theme.colors.purple};
	}
`;

export const Subtitle = styled.div`
	font-family: ${props => props.theme.fontFamilies.heading};
	font-size: 1.5rem;
`;
