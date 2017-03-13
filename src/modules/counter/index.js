import React from 'react'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton';
import { incrementCounter, decrementCounter } from './dux'

class Counter extends React.Component {
  render() {
    return (
      <div>
        <div>Count: {this.props.counter.count}</div>
        <RaisedButton onTouchTap={this.props.add} label="+" />
        <RaisedButton onTouchTap={this.props.subtract} label="-" />
      </div>
    )
  }
}

Counter.propTypes = {
  counter: React.PropTypes.object.isRequired,
  add: React.PropTypes.func.isRequired,
  subtract: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    add: () => dispatch(incrementCounter()),
    subtract: () => dispatch(decrementCounter())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)

