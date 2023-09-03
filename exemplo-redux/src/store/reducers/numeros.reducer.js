import { ActionTypes } from '../actions/actions.types'

/* Reducers */

const initialState = { 
  min: 0, 
  max: 10 
}

export default function numerosReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.NUMERO_MINIMO_ALTERADO:
      return { ...state, min: action.payload }
    case ActionTypes.NUMERO_MAXIMO_ALTERADO:
      return { ...state, max: action.payload }
    default:
      return state
  }
}