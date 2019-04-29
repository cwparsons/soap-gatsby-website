import * as React from 'react';

import { SoapRollup } from '../SoapRollup';
import { ISoapRecipe } from '../../utils/fragments';
import * as S from './styles';

export function SoapRecipe({ node }: { node: ISoapRecipe }) {
	return (
		<SoapRollup node={node}>
			<S.Markdown className="soap-post" dangerouslySetInnerHTML={{ __html: node.html }} />
		</SoapRollup>
	);
}
