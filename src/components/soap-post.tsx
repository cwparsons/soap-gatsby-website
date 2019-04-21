import * as React from 'react';

import styled from 'styled-components';

import SoapRollup from './soap-rollup';
import { ISoapPost } from '../utils/fragments';

//#region Styled components

const Markdown = styled.div`
	font-size: 16px;

	h2 {
		font-family: 'Cormorant Garamond', 'serif';
	}

	table {
		border-collapse: collapse;
		width: 100%;
	}

	th {
		font-family: 'Cormorant Garamond', 'serif';
		font-size: 18px;
		font-weight: bolder;
	}

	th,
	td {
		padding: 1rem 0.5rem;
	}

	th:first-child,
	td:first-child {
		padding-left: 0;
	}

	th:last-child,
	td:last-child {
		padding-right: 0;
	}

	td {
		border-top: 1px solid black;
		font-size: 13px;
	}

	td:first-child {
		font-weight: bold;
		text-transform: uppercase;
	}
`;

//#endregion

export default function SoapPost({ node }: { node: ISoapPost }) {
	return (
		<SoapRollup node={node}>
			<Markdown className="soap-post" dangerouslySetInnerHTML={{ __html: node.html }} />
		</SoapRollup>
	);
}
