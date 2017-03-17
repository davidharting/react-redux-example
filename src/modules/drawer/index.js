import React, { Component, PropTypes } from 'react';
import Drawer from 'material-ui/Drawer';
import { List, ListItem, makeSelectable } from 'material-ui/List';
// import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as drawerActions from './dux';

const SelectableList = makeSelectable(List);

class AppNavDrawer extends Component {
  render() {
    const theme = this.props.muiTheme;
    const topBarStyle = {
      backgroundColor: theme.palette.primary1Color,
      color: theme.appBar.textColor
    };

    const {
      location,
      docked,
      onRequestChangeNavDrawer,
      onChangeList,
      open,
      style
    } = this.props;

    return (
      <div>
        <Drawer
          style={style}
          docked={docked}
          open={open}
          onRequestChange={onRequestChangeNavDrawer}
        >
          <SelectableList value="" onChange={onChangeList}>
            <ListItem primaryText="Apps" />
            <ListItem
              primaryText="Counter"
              containerElement={<Link to="/counter" />}
            />
            <ListItem
              primaryText="Todo List"
              containerElement={<Link to="/todo" />}
            />
          </SelectableList>
        </Drawer>
      </div>
    );
  }
}

AppNavDrawer.propTypes = {
  docked: PropTypes.bool.isRequired,
  location: PropTypes.object.isRequired,
  onChangeList: PropTypes.func.isRequired,
  onRequestChangeNavDrawer: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
  // style: PropTypes.object,
  // drawer: React.PropTypes.object.isRequired,
  // actions: React.PropTypes.object.isRequired,
  // muiTheme: React.PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    drawer: state.drawer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(drawerActions, dispatch)
  };
}

export default muiThemeable()(
  connect(mapStateToProps, mapDispatchToProps)(AppNavDrawer)
);
