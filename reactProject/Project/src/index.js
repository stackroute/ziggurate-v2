import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {blue700,blue400} from 'material-ui/styles/colors';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Deploying from './Stepper';
import appBar from './appBar';
import Home from './Home';
import BranchService from './AppDetails';
import login from './login';
import App from './app';
import AllServer from './AllServer';
import DeployedApp from './DeployedApp';
import ContainerInfo from './ContainerInfo';
import Deploy from './Deploy'

injectTapEventPlugin();

const muiTheme=getMuiTheme({
    palette:{
        textColor: blue700,
        primary1Color: blue400,
        primary2Color: blue700
    }
});
ReactDOM.render(
    <MuiThemeProvider muiTheme={muiTheme}>
         <Router history={hashHistory}>
           <Route path="/" component={login}/>
           <Route path="logout" component={login}/>
           <Route path="app" component={App}>
             <IndexRoute component={Home}/>
             <Route path="AppDetails" component={BranchService}/>
             <Route path="AllServer" component={AllServer}/>
             <Route path="Deploy" Component={Deploy} />
             <Route path="ContainerInfo" component={ContainerInfo} />
             <Route path="DeployedApp" component={DeployedApp}/>
             <Route path="Stepper" component={Deploying} />
           </Route>
       </Router>
     </MuiThemeProvider>,
 document.getElementById('root')
);