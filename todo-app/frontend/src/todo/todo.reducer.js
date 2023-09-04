import { ActionsEnum } from './actions.enum'

const initialState = {
  description: '',
  list: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionsEnum.DESCRIPTION_CHANGE:
      return { ...state, description: action.payload }
    case ActionsEnum.TODO_SEARCH:
      return { ...state, list: action.payload }
    case ActionsEnum.TODO_CLEAR:
      return { ...state, description: '' }
    default:
      return state
  }
}