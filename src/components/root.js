import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Paper from 'material-ui/Paper'

import App from './app'
import Counter from '../modules/counter'
import Todo from '../modules/todo'
import Drawer from '../modules/drawer'

class Root extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <Provider store={this.props.store}>
          <BrowserRouter>
            <div>
              <Drawer />
              <Route path="/" component={App} />
              <Paper zDepth={0}>
                <Route path="/counter" component={Counter} />
                <Route path="/todo" component={Todo} />
              </Paper>
            </div>
          </BrowserRouter>
        </Provider>
      </MuiThemeProvider>
    )
  }
}

Root.propTypes = {
  store: React.PropTypes.object.isRequired
}

export default Root
