import styled from 'styled-components';

export const Wrapper = styled.div`
	font-family: ${props => props.theme.fontFamilies.body};
	margin-left: auto;
	margin-right: auto;
	max-width: 48rem;
	padding: 3rem 1rem;

	@media ${props => props.theme.mediaQueries.sm} {
		padding: 5rem 2rem;
	}
`;
