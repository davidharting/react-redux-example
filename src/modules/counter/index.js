import React from 'react'
import { connect } from 'react-redux'
import { incrementCounter, decrementCounter } from './dux'

class Counter extends React.Component {
  render() {
    return (
      <div>
        Count: {this.props.counter.count}
        <button onClick={this.props.add}>+</button>
        <button onClick={this.props.subtract}>-</button>
      </div>
    )
  }
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

