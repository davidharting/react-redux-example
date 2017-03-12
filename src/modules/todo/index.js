import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
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
        <TextField
          onChange={(e) => this.props.draftTodo(e.target.value)}
          hintText='What will you do next?'
        />
        <RaisedButton label='+' onTouchTap={() => this.props.addTodo(this.props.todo.draft)} />
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