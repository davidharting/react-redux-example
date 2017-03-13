import React from 'react'
import MuiDrawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import muiThemeable from 'material-ui/styles/muiThemeable';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as drawerActions from './dux'

class Drawer extends React.Component {
  render() {
    const theme = this.props.muiTheme
    const topBarStyle = {
     backgroundColor: theme.palette.primary1Color,
     color: theme.appBar.textColor
     
    }
    return (
      <div>
        <MuiDrawer open={this.props.drawer.isOpen}>
          <MenuItem
            primaryText='Apps'
            onTouchTap={this.props.actions.closeDrawer}
            innerDivStyle={topBarStyle}
          />
          <MenuItem primaryText='Counter' />
          <MenuItem primaryText='Todo List' />
        </MuiDrawer>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    drawer: state.drawer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(drawerActions, dispatch)
  }
}

export default muiThemeable()(connect(mapStateToProps, mapDispatchToProps)(Drawer))