import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import {
  ConnectedNavBar,
  Map
} from './components'

import {
  rootStore
} from './store/rootStore'

import '../css/App.css'


class App
  extends Component {

  render() {
    return (
      <Router>
        <Provider store={rootStore}>
          <div className="App">
            <ConnectedNavBar />
            <div className="App-intro">
                <Route path='/:location/:heatmap' component={Map} />
            </div>
          </div>
        </Provider>
      </Router>
    );
  }
}

export default App
