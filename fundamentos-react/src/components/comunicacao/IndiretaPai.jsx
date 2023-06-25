import IndiretaFilho from "./IndiretaFilho";
import { useState } from 'react';

export default function IndiretaPai(props) {
  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState(0)

  function emitirInformacoesDoPai(nome, idade) {
    setNome(nome);
    setIdade(idade);
  }

  return (
    <div>
      {(nome !== '' && idade !== 0) ? <span>Meu pai se chama {nome} e tem {idade} anos</span> : ''}
      <IndiretaFilho quandoClicar={emitirInformacoesDoPai} />
    </div>
  );
}