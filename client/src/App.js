import React, { Component } from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import ContextComponent from './components/ContextComponent';
import DashboardView from './views/DashboardView';
import DeployView from './views/DeployView';
import Login from './views/Login';
import cookie from 'react-cookie';
import request from 'superagent';


function redirectIfLoggedIn(nextState, replace, next) {
    const token = cookie.load('token');
    if(token) {
            replace('/:ownerName');
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
        <Route path=":ownerName" component={ContextComponent} onEnter={redirectIfNotLoggedIn}  >
          <IndexRoute component={DashboardView} onEnter={redirectIfNotLoggedIn} />
          <Route path="/:ownerName/deploy" component={DeployView} onEnter={redirectIfNotLoggedIn}   />
        </Route>
        </Router>
        );
  }
}

export default App;
