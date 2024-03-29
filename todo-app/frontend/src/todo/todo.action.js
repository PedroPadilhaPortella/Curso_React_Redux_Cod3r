import { ActionsEnum } from './actions.enum'
import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

export const changeDescription = (event) => ({
  type: ActionsEnum.DESCRIPTION_CHANGE,
  payload: event.target.value
});

export const search = () => {
  return (dispatch, getState) => {
    const description = getState().todo.description;
    const search = description ? `&description__regex=/${description}/` : '';
    axios.get(`${URL}?sort=-createdAt${search}`)
      .then((response) => dispatch({ type: ActionsEnum.TODO_SEARCH, payload: response.data }));
  }

}

export const add = (description) => {
  return (dispatch) => {
    axios.post(URL, { description })
      .then((response) => dispatch({ type: ActionsEnum.TODO_CLEAR, payload: response.data }))
      .then(() => dispatch(search()));
  }
}

export const markAsDone = (todo) => {
  return (dispatch) => {
    axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
      .then(() => dispatch(search()));
  }
}

export const markAsPending = (todo) => {
  return (dispatch) => {
    axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
      .then(() => dispatch(search()));
  }
}

export const remove = (todo) => {
  return (dispatch) => {
    axios.delete(`${URL}/${todo._id}`)
      .then(() => dispatch(search()));
  }
}

export const clear = () => {
  return [{ type: ActionsEnum.TODO_CLEAR }, search()]
}