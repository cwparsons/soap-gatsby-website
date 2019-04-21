import { Link } from 'gatsby';
import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 2rem;

	@media ${props => props.theme.mediaQueries.sm} {
		flex-direction: row;
		flex-wrap: wrap;
		margin-top: 4rem;
	}
`;

export const ImageContainer = styled.div`
	flex: 1;
	width: 100%;

	@media ${props => props.theme.mediaQueries.sm} {
		margin-right: 2rem;
		margin-top: 2rem;
		max-width: 18rem;
	}
`;

export const TextContainer = styled.div`
	flex: 1;
	margin-top: 2rem;
`;

export const Heading = styled.h2`
	flex: 1;
	font-family: ${props => props.theme.fontFamilies.heading};
	font-size: 3rem;
	line-height: ${props => props.theme.lineHeight.heading};
	margin-bottom: 2rem;
	margin-top: 0;
`;

export const LinkStyled = styled(Link)`
	color: ${props => props.theme.colors.black};
	text-decoration: none;

	&:focus,
	&:hover {
		color: ${props => props.theme.colors.purple};
	}
`;

export const Subtitle = styled.span`
	display: block;
	font-size: 1.5rem;
	font-weight: normal;
`;

export const Time = styled.time`
	display: block;
	font-family: ${props => props.theme.fontFamilies.heading};
	margin-bottom: 3rem;
	margin-top: 0;
`;
