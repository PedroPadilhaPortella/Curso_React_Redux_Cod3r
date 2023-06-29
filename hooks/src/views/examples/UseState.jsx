import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseState = (props) => {

  const [count, setCount] = useState(0);
  const [name, setName] = useState(null);

  const showMessage = () => {
    if(name) {
      return <span className="text">Watashi no name wa {name} desu. Hajimemashite!</span>
    }
  }

  return (
    <div className="UseState">
      <PageTitle
        title="Hook UseState"
        subtitle="Estado em componentes funcionais!"
      />

      <SectionTitle title="Exercício #1" />
      <div className="center">
        <span className="text">{count}</span>
        <div>
          <button className="btn" onClick={() => setCount(count - 1)}>- 1</button>
          <button className="btn" onClick={() => setCount(count + 1)}>+ 1</button>
          <button className="btn" onClick={() => setCount(current => current * 0)}>Reset</button>
        </div>
      </div>
      <SectionTitle title="Exercício #2" />
      <div className="center">
        <input type="text" className="input" value={name} onChange={(event) => setName(event.target.value)} />
        { showMessage() }
      </div>
    </div>
  )
}

export default UseState
