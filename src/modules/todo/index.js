import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as todoActions from './dux'

class Todo extends React.Component {
  renderTodo(todo) {
    return <div>{todo}</div>
  }

  renderList() {
    return this.props.todo.list.map( (todo) => this.renderTodo(todo))
  }

  render() {
    return (
      <div>
        <h3>Do List</h3>
        <input type='text' onChange={(e) => this.props.draftTodo(e.target.value)} />
        <button onClick={() => this.props.addTodo(this.props.todo.draft)}>+</button>
        {this.renderList()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    todo: state.todo
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(todoActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)