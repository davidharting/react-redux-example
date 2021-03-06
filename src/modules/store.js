import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import counter from 'modules/counter/dux'
import todo from 'modules/todo/dux'
import drawer from 'modules/drawer/dux'
import { StorageKeys } from 'const'

let store
const middleware = [thunk]

if (localStorage.getItem(StorageKeys.ENABLE_REDUX_LOGGER) === 'true') {
  // eslint-disable-next-line global-require
  const createLogger = require('redux-logger')
  const logger = createLogger()
  middleware.push(logger)
}

function isStoreInitialized() {
  if (!store) {
    console.error('Store has not been initialized! Did you run configureStore?')
    return false
  }

  return true
}

export function configureStore() {
  const rootReducer = combineReducers({ counter, todo, drawer })
  store = createStore(rootReducer, applyMiddleware(...middleware))
  return store
}

export function dispatch(action) {
  if (!isStoreInitialized()) {
    return null
  }

  return store.dispatch(action)
}

export function getState() {
  if (!isStoreInitialized()) {
    return null
  }

  return store.getState()
}
