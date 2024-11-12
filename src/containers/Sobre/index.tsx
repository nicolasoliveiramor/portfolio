import Titulo from '../../components/Title'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
	<section>
		<Titulo fontSize={16}>Sobre</Titulo>
		<Paragrafo tipo="principal">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem officia
			nostrum commodi doloremque eveniet unde assumenda quaerat, fugiat
			voluptate inventore fuga, vel eligendi? Dolor ab maxime sint recusandae
			ipsum voluptatibus!
		</Paragrafo>
		<GithubSecao>
			<img src="https://github-readme-stats.vercel.app/api?username=nicolasoliveiramor&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />

			<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=nicolasoliveiramor&layout=compact&langs_count=7&theme=dracula" />
		</GithubSecao>
	</section>
)

export default Sobre
