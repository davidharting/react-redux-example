import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import counter from './counter/dux' // TODO: How to I get webpack to let me import like: import counter from 'counter/dux'
// http://moduscreate.com/es6-es2015-import-no-relative-path-webpack/
import todo from './todo/dux'
import drawer from './drawer/dux'

let store
const middleware = [ thunk ]

if (process.env.ENVIRONMENT === 'development') {
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
