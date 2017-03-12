import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar';

import Counter from '../modules/counter'

class App extends Component {
  render() {
    return (
      <div>
        <AppBar title='Product Demo'/>
      </div>
    )
  }
}

export default App