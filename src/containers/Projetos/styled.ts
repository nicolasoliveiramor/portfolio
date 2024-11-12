import styled from 'styled-components'

export const Lista = styled.ul`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	column-gap: 3em;
	row-gap: 3em;

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
		column-gap: 0;
		row-gap: 2em;
	}
`
