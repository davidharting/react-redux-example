import React, { Component, PropTypes } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import withWidth, { MEDIUM, LARGE } from 'material-ui/utils/withWidth';
import spacing from 'material-ui/styles/spacing';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import AppNavDrawer from 'modules/drawer';
import Counter from 'modules/counter';
import Todo from 'modules/todo';
import * as drawerActions from 'modules/drawer/dux';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navDrawerOpen: false
    };
  }

  handleTouchTapLeftIconButton() {
    this.setState({
      navDrawerOpen: !this.state.navDrawerOpen
    });
  }

  handleChangeRequestNavDrawer(open) {
    this.setState({
      navDrawerOpen: open
    });
  }

  handleChangeList(event, value) {
    this.setState({
      navDrawerOpen: false
    });
  }

  getStyles() {
    const styles = {
      appBar: {},
      root: {
        paddingTop: spacing.desktopKeylineIncrement,
        minHeight: 400
      },
      content: {
        margin: spacing.desktopGutter
      },
      contentWhenMedium: {
        margin: `${spacing.desktopGutter * 2}px ${spacing.desktopGutter * 3}px`
      }
    };

    if (this.props.width === MEDIUM || this.props.width === LARGE) {
      styles.content = Object.assign(styles.content, styles.contentWhenMedium);
    }

    return styles;
  }

  render() {
    let {
      navDrawerOpen
    } = this.state;

    const styles = this.getStyles();

    let title = 'product demo';

    let docked = false;
    let showMenuIconButton = true;

    if (this.props.width === LARGE && title !== '') {
      docked = true;
      navDrawerOpen = true;
      showMenuIconButton = false;
      styles.content.paddingLeft = 256;
      styles.appBar.paddingLeft = 256;
    }

    return (
      <div>
        <AppBar
          title={title}
          onLeftIconButtonTouchTap={this.handleTouchTapLeftIconButton.bind(
            this
          )}
          showMenuIconButton={showMenuIconButton}
          iconElementRight={<p>test</p>}
          style={styles.appBar}
        />
        <AppNavDrawer
          location={location}
          docked={docked}
          onRequestChangeNavDrawer={this.handleChangeRequestNavDrawer.bind(
            this
          )}
          onChangeList={this.handleChangeList.bind(this)}
          open={navDrawerOpen}
        />
        <div style={styles.content}>
          <Paper zDepth={0}>
            <Route path="/counter" component={Counter} />
            <Route path="/todo" component={Todo} />
          </Paper>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(drawerActions, dispatch)
  };
}

export default withWidth()(connect(null, mapDispatchToProps)(App));
