import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Content from '../components/layout/Content'
import Menu from '../components/layout/Menu'
import { DataContext, data } from '../data/DataContext'
import Store from '../data/Store'
import './App.css'

const App = props => {

  const [state, setState] = useState(data);

  return (
    <Store>
      <div className="App">
        <DataContext.Provider value={{ state, setState }}>
          <Router>
            <Menu />
            <Content />
          </Router>
        </DataContext.Provider>
      </div>
    </Store>
  )
}

export default App