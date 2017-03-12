import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

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
      <MuiThemeProvider>
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
      </MuiThemeProvider>
    )
  }
}

export default Root