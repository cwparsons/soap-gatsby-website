import { Link } from 'gatsby';
import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 4rem;

	@media ${props => props.theme.mediaQueries.sm} {
		flex-direction: row-reverse;
		flex-wrap: wrap;
	}
`;

export const ImageColumn = styled.div`
	width: 100%;

	@media ${props => props.theme.mediaQueries.sm} {
		margin-left: 1rem;
		width: calc(33% - 0.5rem);
	}

	a {
		transition: transform 250ms ease-in;
	}

	a:focus,
	a:hover {
		transform: scale(1.025);
	}
`;

export const ImageWrapper = styled.div`
	border-radius: 0.125rem;
	box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
	overflow: hidden;

	.gatsby-image-wrapper-constrained {
		display: block !important;
	}
`;

export const TextColumn = styled.div`
	flex: 1;
	margin-top: 2rem;

	@media ${props => props.theme.mediaQueries.sm} {
		margin-top: 0;
	}
`;

export const Heading = styled.h2`
	flex: 1;
	font-size: 3rem;
	line-height: 3rem;
	margin-bottom: 1rem;
	margin-top: 0;

	@media ${props => props.theme.mediaQueries.sm} {
		margin-bottom: 2rem;
	}
`;

export const LinkStyled = styled(Link)`
	color: ${props => props.theme.colors.dark};
	display: block;

	&:focus,
	&:hover {
		color: ${props => props.theme.colors.primary};
	}
`;

export const Title = styled.span`
	a & {
		${props => props.theme.textUnderline}
	}
`;

export const Subtitle = styled.span`
	display: block;
	font-size: 1.5rem;
	font-weight: normal;

	a & {
		${props => props.theme.textUnderline}
	}
`;

export const Time = styled.time`
	display: block;
	font-family: ${props => props.theme.fontFamilies.heading};
`;
