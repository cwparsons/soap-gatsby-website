import styled from 'styled-components';

export const Markdown = styled.div`
	font-size: 16px;
	margin-top: 3rem;

	h2 {
		margin-top: 3rem;
	}

	table {
		border-collapse: collapse;
		width: 100%;
	}

	th {
		font-family: ${props => props.theme.fontFamilies.heading};
		font-weight: bolder;
	}

	th,
	td {
		padding: 1rem 0.5rem;
		width: calc(1 / 3 * 100%);
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
