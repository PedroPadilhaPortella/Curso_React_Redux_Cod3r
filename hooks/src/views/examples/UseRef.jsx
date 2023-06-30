import React, { useEffect, useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseRef = (props) => {

  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');

  const count = useRef(0);
  const myInput1 = useRef(null);
  const myInput2 = useRef(null);

  useEffect(function () {
    count.current++
    myInput2.current.focus()
  }, [valor1])

  useEffect(function () {
    count.current++
    myInput1.current.focus()
  }, [valor2])

  const merge = (value1, value2) => {
    return [...value1]
      .map((el, i) => `${el}${value2[i] || ''}`)
      .join('')
  }

  return (
    <div className="UseRef">
      <PageTitle
        title="Hook UseRef"
        subtitle="Retorna um objeto mutável com a propriedade .current!"
      />

      <SectionTitle title="Exercício #1" />
      <div className="center">
        <div>
          <span className="text">Valor: </span>
          <span className="text">{merge(valor1, valor2)} [</span>
          <span className="text red">{count.current}</span>
          <span className="text">]</span>
        </div>
        <input
          type="text" className="input" ref={myInput1}
          value={valor1} onChange={e => setValor1(e.target.value)}
        />
      </div>

      <SectionTitle title="Exercício #2" />
      <div className="center">
        <input
          type="text" className="input" ref={myInput2}
          value={valor2} onChange={e => setValor2(e.target.value)}
        />
      </div>
    </div>
  )
}

export default UseRef
