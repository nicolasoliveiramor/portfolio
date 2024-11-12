import styled from 'styled-components'
import { Props } from './index'

export const Titulo = styled.h3<Props>`
	color: #282a35
	font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
	font-weight: bold;
	margin-bottom: 16px;
`

export const TituloNome = styled.h1<Props>`
	@media (max-width: 768px) {
		font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
		text-align: center;
		margin-bottom: 16px;
	}
`
