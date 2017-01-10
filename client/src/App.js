import React, { Component } from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import ContextComponent from './components/ContextComponent';
import DashboardView from './views/DashboardView';
import DeployView from './views/DeployView';

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        {/* all components within app should load only when user has
          * successfully logged in. */}
        <Route path="/" component={ContextComponent}>
          <IndexRoute component={DashboardView} />
          <Route path="/deploy" component={DeployView} />
        </Route>
      </Router>
    );
  }
}

export default App;
