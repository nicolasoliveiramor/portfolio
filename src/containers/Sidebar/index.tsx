import Titulo from '../../components/Title'
import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import { Descricao, BotaoTema, SidebarContainer } from './styles'

const Sidebar = () => (
	<>
		<aside>
			<SidebarContainer>
				<Avatar />
				<Titulo fontSize={14}>Nicolas Oliveira Mor</Titulo>
				<Paragrafo tipo="secundario" fontSize={16}>
					nicolasoliveiramor
				</Paragrafo>
				<Descricao tipo="principal" fontSize={12}>
					Aluno Full-Stack Python
				</Descricao>
				<BotaoTema>Trocar Tema</BotaoTema>
			</SidebarContainer>
		</aside>
	</>
)

export default Sidebar
