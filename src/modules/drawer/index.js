import React from 'react'
import MuiDrawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import { connect } from 'react-redux'

class Drawer extends React.Component {
  render() {
    return (
      <div>
        <MuiDrawer open={this.props.drawer.isOpen}>
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

export default connect(mapStateToProps)(Drawer)