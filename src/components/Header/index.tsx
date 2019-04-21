import * as React from 'react';

import { useStaticQuery, graphql } from 'gatsby';
import { IContentYaml } from '../../utils/fragments';

import * as S from './styles';

export function Header({ location }: { location: Location }) {
	const { contentYaml } = useStaticQuery<{ contentYaml: IContentYaml }>(graphql`
		{
			contentYaml {
				...ContentYamlSchema
			}
		}
	`);

	const isHomepage = location.pathname === '/';

	const link = <S.HeadingLink to={'/'}>{contentYaml.headerTitle}</S.HeadingLink>;

	return (
		<S.Wrapper>
			{isHomepage && contentYaml.headerTitle ? (
				<S.Heading>{link}</S.Heading>
			) : (
				<S.HeadingDiv>{link}</S.HeadingDiv>
			)}

			{contentYaml.headerSubtitle ? (
				<S.Subtitle>{contentYaml.headerSubtitle}</S.Subtitle>
			) : null}
		</S.Wrapper>
	);
}
