import React, { useContext } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { DataContext } from '../../data/DataContext'
import { AppContext } from '../../data/Store'
import SectionTitle from '../../components/layout/SectionTitle'

const UseContext = (props) => {

  const { state, setState } = useContext(DataContext)

  function alterarNumero(numero) {
    setState({ ...state, number: numero })
  }

  const { number, setNumber, text, setText } = useContext(AppContext)

  return (
    <div className="UseContext">
      <PageTitle
        title="Hook UseContext"
        subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
      />

      <SectionTitle title="Exercício #01 - UseContext e Provider" />
      <div className="center">
        <span className="text">{state.number} - {state.text}</span>
        <input type="number" className='input' onChange={e => alterarNumero(e.target.value)} />
      </div>

      <SectionTitle title="Exercício #02 - UseContext e Store" />
      <div className="center">
        <span className="text">{number} - {text}</span>
        <input type="number" className='input' 
          onChange={e => setNumber(e.target.value)} placeholder='Alterar valor' 
        />
        <input type="text" className='input' 
          onChange={e => setText(e.target.value)} placeholder='Alterar texto' 
        />
      </div>
    </div>
  )
}

export default UseContext
