import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import {IndexLink,Link} from 'react-router';
import {List, ListItem} from 'material-ui/List';
import DashboardIcon from 'material-ui/svg-icons/action/dashboard';
import Logout from 'material-ui/svg-icons/action/highlight-off';
import Server from 'material-ui/svg-icons/device/storage';
import DeployIcon from 'material-ui/svg-icons/file/file-upload';
import DeployedAppIcon from 'material-ui/svg-icons/action/view-module';
import Divider from 'material-ui/Divider';
import cookie from 'react-cookie';
import request from 'superagent';
import jwt from 'jwt-decode';


function decodeToken(token) {
  let decoded = jwt(token);
  return(
    decoded.roles[0]);
}


class Header extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }

static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired
    };
  }


   componentDidMount() {
      
    if(!localStorage.user) {
      request
      .get('http://localhost:9080/api/v1/auth/github/me')
      .end(function(err, response) {
        if(err) { throw err; }
        localStorage.user = JSON.stringify(response.body);
      });
    } 
  }


  handleLogout() {
    delete localStorage.user;

    cookie.remove('token');
     this.context.router.push('/');

     }

  handleToggle = () => this.setState({open: !this.state.open});
  handleClose = () => this.setState({open: false});

  render() {
    var user=JSON.parse(localStorage.user||null);
     
     if(user!==null)
     {
       var login=user.login;
       console.log("login :"+login);
     }
    return(

      <div>
        <AppBar
        title="Ziggurate"
        onLeftIconButtonTouchTap={() => { this.setState({open: true}); }}/>

        <Drawer open={this.state.drawerOpen}
          docked={false}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})} >
          <div >
            <div style={{marginTop:'50px',textAlign: 'center'}}>
              <Avatar  size={150} />
              <h5>{login}</h5>
            </div>
            <Divider/>
              <List >
                <ListItem primaryText="Dashboard" leftIcon={<DashboardIcon />} onTouchTap={this.handleClose}  />
                <ListItem primaryText="Server" leftIcon={<Server />} onTouchTap={this.handleClose} />
                <IndexLink to="/app/deploy" activeClassName="active" style={{textDecoration:'none'}}> <ListItem primaryText="Deploy" leftIcon={<DeployIcon />} onTouchTap={this.handleClose} /></IndexLink>
                <IndexLink to="/app/view" activeClassName="active" style={{textDecoration:'none'}}><ListItem primaryText="Deployed App" leftIcon={<DeployedAppIcon />} onTouchTap={this.handleClose} /></IndexLink>
                <Link to="/"><MenuItem primaryText="Logout" leftIcon={<Logout />} onClick={this.handleLogout.bind(this)} /></Link>
              </List>        
          </div>
        </Drawer>
      </div>

      );

      }

}

export default Header;