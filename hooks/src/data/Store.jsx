import React, { useState } from 'react';

export const initialState = {
  number: 1234,
  text: 'Context API com Hooks'
}

export const AppContext = React.createContext(initialState);

const Store = (props) => {

  const [state, setState] = useState(initialState);

  const updateState = (key, value) => {
    setState({ ...state, [key]: value });
  }

  return (
    <AppContext.Provider value={{
      number: state.number,
      text: state.text,
      setNumber: x => updateState('number', x),
      setText: x => updateState('text', x),
    }}>
      {props.children}
    </AppContext.Provider>
  );
}

export default Store;