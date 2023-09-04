import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Grid from '../template/Grid'
import IconButton from '../template/IconButton'
import { changeDescription, search, add, clear } from './todo.action'

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.keyHandler = this.keyHandler.bind(this);
  }

  keyHandler(e) {
    const { add, search, description, clear } = this.props;
    if (e.key == 'Enter') {
      e.shiftKey ? search() : add(description);
    } else if (e.key === 'Escape') {
      clear();
    }
  }

  componentWillMount() {
    this.props.search();
  }

  render() {
    const { add, search, description, clear } = this.props;

    return (
      <div role='form' className="todoForm" >
        <Grid cols="12 9 10">
          <input type="text" className='form-control' placeholder='Adicione uma tarefa' id='description'
            onKeyUp={this.keyHandler} value={this.props.description} 
            onChange={this.props.changeDescription} />
        </Grid>
        <Grid cols="12 3 2">
          <IconButton style="primary" icon="plus" onClick={() => add(description)}></IconButton>
          <IconButton style="info" icon="search" onClick={search}></IconButton>
          <IconButton style="default" icon="close" onClick={clear}></IconButton>
        </Grid>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    description: state.todo.description
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeDescription, search, add, clear }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);