import { Link } from 'gatsby';
import styled from 'styled-components';

export const Hr = styled.hr`
	border-bottom: 1px solid ${props => props.theme.colors.black};
	border-top: 0;
	margin-bottom: 3rem;
	margin-top: 3rem;
`;

export const List = styled.ul`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	list-style: none;
	margin-top: -1rem;
	padding: 0;
	text-align: center;

	@media ${props => props.theme.mediaQueries.sm} {
		flex-direction: row;
	}
`;

export const LinkStyled = styled(Link)`
	${props => props.theme.textUnderline}

	color: ${props => props.theme.colors.black};
	display: inline-block;
	font-family: ${props => props.theme.fontFamilies.heading};
	font-size: 1.5rem;
	margin-top: 1rem;
`;
