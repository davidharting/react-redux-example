import React from 'react'
import MuiDrawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import { Link } from 'react-router-dom'
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
        <MuiDrawer
          open={this.props.drawer.isOpen}
          docked={false}
          onRequestChange={this.props.actions.toggleDrawer}
        >
          <MenuItem
            primaryText="Apps"
            onTouchTap={this.props.actions.closeDrawer}
            innerDivStyle={topBarStyle}
          />
          <MenuItem
            primaryText="Counter"
            containerElement={<Link to="/counter" />}
            onTouchTap={this.props.actions.closeDrawer}
          />
          <MenuItem
            primaryText="Todo List"
            containerElement={<Link to="/todo" />}
            onTouchTap={this.props.actions.closeDrawer}
          />
        </MuiDrawer>
      </div>
    )
  }
}

Drawer.propTypes = {
  drawer: React.PropTypes.object.isRequired,
  actions: React.PropTypes.object.isRequired,
  muiTheme: React.PropTypes.object.isRequired
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
