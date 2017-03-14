import React, { Component, PropTypes } from 'react'
import { Route } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import Paper from 'material-ui/Paper'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Drawer from 'modules/drawer'
import Counter from 'modules/counter'
import Todo from 'modules/todo'
import * as drawerActions from 'modules/drawer/dux'


class App extends Component {
  render() {
    return (
      <div>
        <AppBar
          title="Product Demo"
          onLeftIconButtonTouchTap={this.props.actions.openDrawer}
        />
        <Drawer />
        <Paper zDepth={0}>
          <Route path="/counter" component={Counter} />
          <Route path="/todo" component={Todo} />
        </Paper>
      </div>
    )
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(drawerActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(App)
