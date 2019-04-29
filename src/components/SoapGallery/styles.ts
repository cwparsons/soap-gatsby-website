import styled from 'styled-components';

export const Wrapper = styled.div`
	margin-top: 2rem;

	@media ${props => props.theme.mediaQueries.sm} {
		flex-direction: row-reverse;
		flex-wrap: wrap;
		margin-top: 4rem;
	}
`;

export const Heading = styled.h2`
	flex: 1;
	font-size: 3rem;
	line-height: 3rem;
	margin-bottom: 2rem;
	margin-top: 0;
`;

export const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-column-gap: 1rem;
	grid-row-gap: 1rem;

	@media ${props => props.theme.mediaQueries.sm} {
		grid-template-columns: 1fr 1fr 1fr;
	}
`;

export const ImageWrapper = styled.div`
	border-radius: 0.125rem;
	box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
	overflow: hidden;
`;
