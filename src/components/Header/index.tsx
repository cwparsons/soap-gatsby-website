import * as React from 'react';

import { Link, graphql, useStaticQuery } from 'gatsby';
import { IContentYaml } from '../../utils/fragments';

import * as S from './styles';

export function Header({ location }: { location: Location }) {
	const { contentYaml }: { contentYaml: IContentYaml } = useStaticQuery(graphql`
		{
			contentYaml {
				...ContentYamlSchema
			}
		}
	`);

	const isHomepage = location.pathname === '/';

	const link = <Link to={'/'}>{contentYaml.headerTitle}</Link>;

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
