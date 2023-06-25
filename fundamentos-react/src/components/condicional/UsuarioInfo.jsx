import If from './If'
import Else from './Else'

export default function UsuarioInfo(props) {

  const usuario = props.usuario || {}

  return (
    <div>
      <If test={usuario && usuario.nome}>
        Seja bem vindo {usuario.nome}!
        <Else>
          Seja bem vindo Anônimo! Por favor, registre-se antes de acessar.
        </Else>
      </If>
    </div>
  );
}