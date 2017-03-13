import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Counter from '../modules/counter'
import * as drawerActions from '../modules/drawer/dux'

class App extends Component {
  render() {
    return (
      <div>
        <AppBar
          title='Product Demo'
          onLeftIconButtonTouchTap={this.props.actions.openDrawer}
        />
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(drawerActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(App)