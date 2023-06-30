import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseEffect = (props) => {

  const [numero, setNumero] = useState(1)
  const [fatorial, setFatorial] = useState(1)
  const [status, setStatus] = useState("Impar")
  function calcularFatorial(numero) {
    if (numero < 0) return 'Não existe';
    if (numero === 0) return 1;
    return calcularFatorial(numero - 1) * numero;
  }

  useEffect(function () {
    setFatorial(calcularFatorial(numero))
  }, [numero]);

  useEffect(function () {
    if (fatorial > 100000) document.title = 'Esse valor é bem grande!'
  }, [fatorial]);

  useEffect(function () {
    (numero % 2 === 0) ? setStatus('Par') : setStatus('Ímpar')
  }, [numero]);

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />

      <SectionTitle title="Exercício #1" />
      <div className="center">
        <div>
          <span className="text">Fatorial: </span>
          <span className="text red">{fatorial}</span>
        </div>
        <input type="number" className="input" value={numero} onChange={e => setNumero(e.target.value)} />
      </div>

      <SectionTitle title="Desafio #1" />
      <div className="center">
        <div>
          <span className="text">Status: </span>
          <span className="text red">{status}</span>
        </div>
      </div>
    </div>
  )
}

export default UseEffect
