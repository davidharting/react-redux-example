import reducer from '../reducer'

const INCREMENT = 'counter/INCREMENT'
const DECREMENT = 'counter/DECREMENT'

const initialState = {
  count: 0
}

function increment(state = initialState) {
  return {
    count: state.count + 1
  }
}

function decrement(state = initialState) {
  return {
    count: state.count - 1
  }
}

export default reducer({
  [INCREMENT]: increment,
  [DECREMENT]: decrement
}, initialState)

export function incrementCounter() {
  return {
    type: INCREMENT
  }
}

export function decrementCounter() {
  return {
    type: DECREMENT
  }
}

