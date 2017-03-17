import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import theme from './theme';

import App from 'components/app';

class Root extends React.Component {
  // Put Drawer in App
  // Nest counter and todo routes
  // Separate out routes
  // Default to Login (a separate top-level route)

  render() {
    return (
      <MuiThemeProvider muiTheme={theme}>
        <Provider store={this.props.store}>
          <BrowserRouter>
            <div>
              <Route path="/" component={App} />
            </div>
          </BrowserRouter>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

Root.propTypes = {
  store: React.PropTypes.object.isRequired
};

export default Root;
