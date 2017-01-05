import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {IndexLink} from 'react-router';
import ziggurate from '../images/ziggurate.png'
import Paper from 'material-ui/Paper';

const style = {
  margin: 12,
};

class login extends Component {
constructor() {
super();
this.state = {
drawerOpen: false,
};
}

  render() {
    return(



    	
      <div style={{marginLeft:'0%',marginTop:'8%',textAlign:'center'}}>
     
      <img src= {ziggurate} style={{postion:'fixed',margin:'auto',width:400,height:'auto'}}/>
      <div className='row center-xs'>
        <h1 >Ziggurate</h1>
      <IndexLink to="/App" activeClassName="active" > 
      <RaisedButton
      style={{height: '50', width:400,marginTop:'2%'}}
      label="Login with GitHub" type="submit" primary={true} />
       </IndexLink>
      
      </div>
     
      </div>
     


   );

    }
}

export default login;
