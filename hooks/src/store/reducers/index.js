export default function reducer(state, action) {
  switch (action.type) {
    case 'number_add2':
      return { ...state, number: state.number + 2 }
    case 'number_mult7':
      return { ...state, number: state.number * 7 }
    case 'number_div25':
      return { ...state, number: state.number / 25 }
    case 'number_parseInt':
      return { ...state, number: parseInt(state.number) }
    case 'number_toZero':
      return { ...state, number: 0 }
    case 'number_addN':
      return { ...state, number: state.number + action.payload }
    case 'login':
      return { ...state, user: { name: action.payload, email: `${action.payload}@gmail.com` } }
    default:
      return state
  }
}