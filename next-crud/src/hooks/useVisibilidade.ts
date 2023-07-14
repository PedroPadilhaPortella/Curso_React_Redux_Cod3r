import { useState } from "react";

export default function useVisibilidade() {

  const [visibilidade, setVisibilidade] = useState<'tabela' | 'form'>('tabela');

  const exibirTabela = () => setVisibilidade('tabela')
  const exibirFormulario = () => setVisibilidade('form')

  return {
    formularioEstaVisivel: visibilidade === 'form',
    tabelaEstaVisivel: visibilidade === 'tabela',
    exibirTabela, exibirFormulario
  }
}