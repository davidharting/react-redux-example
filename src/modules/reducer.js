import { handleActions as combineHandlers } from 'redux-actions'

export default function reducer(handlers, defaultState) {
  const reduceHandlers = combineHandlers(handlers, defaultState)
  return function reducerFunction(state = defaultState, action) {
    if (!action) {
      console.error('No data was dispatched')
      return state
    }

    if (!action.type) {
      return state
    }

    return reduceHandlers(state, action)
  }
}
