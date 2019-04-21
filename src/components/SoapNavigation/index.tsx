import * as React from 'react';

import { ISoapPost } from '../../utils/fragments';
import * as S from './styles';

export function SoapNavigation({ previous, next }: { previous: ISoapPost; next: ISoapPost }) {
	return (
		<>
			<S.Hr />

			<S.List>
				<li>
					{previous && (
						<S.LinkStyled to={previous.fields.slug} rel="prev">
							← {previous.frontmatter.title}
						</S.LinkStyled>
					)}
				</li>
				<li>
					{next && (
						<S.LinkStyled to={next.fields.slug} rel="next">
							{next.frontmatter.title} →
						</S.LinkStyled>
					)}
				</li>
			</S.List>
		</>
	);
}
