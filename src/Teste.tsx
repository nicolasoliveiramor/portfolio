import styled from 'styled-components'

type BotaoProps = {
  botoes: boolean
  fontSize?: string
}

const Button = styled.button<BotaoProps>`
  background-color: ${(props) => (props.botoes ? 'green' : 'red')};
  font-size: ${(props) => props.fontSize || '16px'};
  cursor: pointer;
`

const ButtonPerigo = styled(Button)`
  background-color: red;
  color: #fff;

  span {
    text-decoration: line-through;
  }
`

function Teste() {
  return (
    <>
      <Button fontSize="18px" botoes>
        Enviar
      </Button>
      <Button fontSize="14px" botoes={false}>
        Cancelar
      </Button>
      <ButtonPerigo as="a" botoes>
        <span>Não clique aqui!</span>
      </ButtonPerigo>
    </>
  )
}

export default Teste
