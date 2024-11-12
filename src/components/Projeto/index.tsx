import Titulo from '../../components/Title'
import Paragrafo from '../Paragrafo'

import { Card, LinkBotao } from './style'

const Projeto = () => (
	<Card>
		<Titulo>Projeto Lista de tarefas</Titulo>
		<Paragrafo tipo="secundario">Lista de tarefas feitas com VueJS</Paragrafo>
		<LinkBotao>Visualizar</LinkBotao>
	</Card>
)

export default Projeto
