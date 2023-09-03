import { createStore, combineReducers } from 'redux'
import numerosReducer from './reducers/numeros.reducer'

const reducers = combineReducers({
  numeros: numerosReducer,
})

function storeConfig() {
  return createStore(reducers);
}

export default storeConfig;