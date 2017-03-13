import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'

// Dependency will go away in future versions of material-ui
import injectTapEventPlugin from 'react-tap-event-plugin'

import { configureStore } from './modules/store'

import Root from './components/root'

injectTapEventPlugin()
const store = configureStore()

/**
 * Worried about the fact that <AppContainer /> is from a
 * dev dependency (recommended to be dev dep in react-hot-loader docs)
 * but that we render it in production.
 * Maybe I should put in some branched code here based on ENVIRONMENT=dev?
 */

render(
  <AppContainer>
    <Root store={store} />
  </AppContainer>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept('./components/root', () => {
    const NewRoot = require('./components/root').default;
    render(
      <AppContainer>
        <NewRoot store={store} />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}

