import React, { useContext } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { DataContext } from '../../data/DataContext'

const UseContext = (props) => {

  const context = useContext(DataContext)

  function setNumber(numero) {
    context.setState({ ...context.state, number: numero })
  }

  return (
    <div className="UseContext">
      <PageTitle
        title="Hook UseContext"
        subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
      />

      <div className="center">
        <span className="text">{context.state.number} - {context.state.text}</span>
      </div>
      <div className="center">
        <input type="number" onChange={e => setNumber(e.target.value)} />
      </div>
    </div>
  )
}

export default UseContext
