import React from 'react'
import { connect } from 'react-redux'
import IconButton from '../template/IconButton'
import { bindActionCreators } from 'redux'
import { markAsDone, markAsPending, remove } from './todo.action'

function TodoList(props) {

  const renderRows = () => {
    const list = props.list || []

    return list.map((todo) => (
      <tr key={todo._id}>
        <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
        <td>
          <IconButton
            style="success" icon="check" hide={todo.done}
            onClick={() => props.markAsDone(todo)}
          ></IconButton>

          <IconButton
            style="warning" icon="undo" hide={!todo.done}
            onClick={() => props.markAsPending(todo)}
          ></IconButton>

          <IconButton
            style="danger" icon="trash"
            onClick={() => props.remove(todo)}
          ></IconButton>
        </td>
      </tr>
    ))
  }

  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Descrição</th>
          <th className='tableActions'>Ações</th>
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </table>
  );
}

function mapStateToProps(state) {
  return {
    list: state.todo.list
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ markAsDone, markAsPending, remove }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);