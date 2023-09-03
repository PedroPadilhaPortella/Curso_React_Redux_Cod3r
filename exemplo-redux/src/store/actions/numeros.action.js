import { ActionTypes } from '../actions/actions.types'

/*Action Creators */

export function alterarNumeroMinimo(novoNumero) {
  return {
    type: ActionTypes.NUMERO_MINIMO_ALTERADO,
    payload: novoNumero
  }
}

export function alterarNumeroMaximo(novoNumero) {
  return {
    type: ActionTypes.NUMERO_MAXIMO_ALTERADO,
    payload: novoNumero
  }
}