import React, { Component } from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import ContextComponent from './components/ContextComponent';
import DashboardView from './views/DashboardView';
import DeployView from './views/DeployView';
import Login from './views/Login';
import DeployedAppView from './views/DeployedAppView';
import ServiceInfoView from './views/ServiceInfoView';
import cookie from 'react-cookie';
import request from 'superagent';


function redirectIfLoggedIn(nextState, replace, next) {
    const token = cookie.load('token');
    if(token) {
            replace('/app');
    }
    next();
}

function redirectIfNotLoggedIn(nextState, replace, next) {
    const token = cookie.load('token');
    if(!token) { replace('/');
  alert('Login is required..!')
 }
    next();
}




class App extends Component {


  render() {
    return (
      <Router history={hashHistory}>
       
        <Route path="/" component={Login} onEnter={redirectIfLoggedIn} />
        <Route path="/app" component={ContextComponent} onEnter={redirectIfNotLoggedIn}  >
          <IndexRoute component={DashboardView} onEnter={redirectIfNotLoggedIn} />
          <Route path="view" component={DeployedAppView} onEnter={redirectIfNotLoggedIn}  />
          <Route path="deploy" component={DeployView} onEnter={redirectIfNotLoggedIn}   />
          <Route path="serviceinfo" component={ServiceInfoView} onEnter={redirectIfNotLoggedIn}  />
        </Route>
        </Router>
        );
  }
}

export default App;
