import * as React from 'react';

import { SoapRollup } from '../SoapRollup';
import { ISoapPost } from '../../utils/fragments';
import * as S from './styles';

export function SoapPost({ node }: { node: ISoapPost }) {
	return (
		<SoapRollup node={node}>
			<S.Markdown className="soap-post" dangerouslySetInnerHTML={{ __html: node.html }} />
		</SoapRollup>
	);
}
