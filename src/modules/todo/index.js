import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import * as todoActions from './dux'

function renderTodo(todo) {
  return <div>{todo}</div>
}

class Todo extends React.Component {
  renderList() {
    return this.props.todo.list.map(todo => renderTodo(todo))
  }

  render() {
    return (
      <div>
        <h3>Do List</h3>
        <TextField
          onChange={e => this.props.actions.draftTodo(e.target.value)}
          hintText="What will you do next?"
        />
        <RaisedButton
          label="+"
          onTouchTap={() => this.props.actions.addTodo(this.props.todo.draft)}
        />
        {this.renderList()}
      </div>
    )
  }
}

Todo.propTypes = {
  todo: React.PropTypes.object.isRequired,
  actions: React.PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    todo: state.todo
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(todoActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)
