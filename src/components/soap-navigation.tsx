import * as React from 'react';

import { Link } from 'gatsby';
import styled from 'styled-components';

import { ISoapPost } from '../utils/fragments';

//#region Styled components

const Hr = styled.hr`
	border-bottom: 1px solid ${props => props.theme.colors.black};
	border-top: 0;
	margin-bottom: 3rem;
	margin-top: 3rem;
`;

const List = styled.ul`
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

const LinkStyled = styled(Link)`
	color: ${props => props.theme.colors.black};
	display: inline-block;
	margin-top: 1rem;
	text-decoration: none;

	&:focus,
	&:hover {
		color: ${props => props.theme.colors.purple};
	}
`;

//#endregion

export default function SoapNavigation({
	previous,
	next
}: {
	previous: ISoapPost;
	next: ISoapPost;
}) {
	return (
		<>
			<Hr />

			<List>
				<li>
					{previous && (
						<LinkStyled to={previous.fields.slug} rel="prev">
							← {previous.frontmatter.title}
						</LinkStyled>
					)}
				</li>
				<li>
					{next && (
						<LinkStyled to={next.fields.slug} rel="next">
							{next.frontmatter.title} →
						</LinkStyled>
					)}
				</li>
			</List>
		</>
	);
}
