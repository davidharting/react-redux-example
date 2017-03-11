import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Link } from 'react-router-dom'

// Note that I had to lock in react-router and react-router-dom at their exact current
// versions in order for them to play nicely together. I was getting a weird error
// with router context not being defined inside of Link components

import App from './app'
import Counter from '../modules/counter'
import Todo from '../modules/todo'
import LeftNav from './left_nav'

class Root extends React.Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <BrowserRouter>
          <div>
            <LeftNav />
            <Route path='/' component={App} />
            <Route path='/counter' component={Counter} />
            <Route path='/todo' component={Todo} />
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default Root