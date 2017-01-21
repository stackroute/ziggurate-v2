import React, { Component } from 'react';


import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import SelectField from 'material-ui/SelectField';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {pinkA200, transparent} from 'material-ui/styles/colors';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import {IndexLink} from 'react-router';


const style1 = {
 height: 320,
 width: 320,
 margin: 80,
 textAlign: 'center',
 display: 'inline-block',
  border: '5px solid #4CAF50 ',
 };
const style3 = {
 height: 320,
 width: 320,
 margin: 80,
 textAlign: 'center',
 display: 'inline-block',
 border: '5px solid #F44336 ',

};
const style5={
 color: '#BDBDBD ',
 margin: 0
}

class DeployedApp extends Component {

 render() {
   
   return (
     <div>
     
  <Paper style={style1} zDepth={1} circle={true} >
  <h1> App1</h1>
<h3 style={style5}> Basic info</h3>
<Divider/>
<h4>total_no_of_services: 5</h4>
<h4>total_memory_usage: 2048 MB</h4>
 <IndexLink to="/App/AppDetails" activeClassName="active" style={{textDecoration:'none'}}><RaisedButton label="For More Info" primary={true}/></IndexLink>
      
  </Paper>
   <Paper style={style1} zDepth={2} circle={true} >
   <h1>App2</h1>

<h3 style={style5}> Basic info</h3>
<Divider/>
<h4>total_no_of_services: 5</h4>
<h4>total_memory_usage: 2048 MB</h4>
  <RaisedButton label="For More Info" primary={true} />
   </Paper>
   <Paper style={style3} zDepth={3} circle={true}>
    <h1>App3</h1>

<h3 style={style5}> Basic info</h3>
<Divider/>
<h4>total_no_of_services: 5</h4>
<h4>total_memory_usage: 2048 MB</h4>
<RaisedButton label="For More Info" primary={true} />
    </Paper>
  
     </div>
   );
 }
}
export default DeployedApp;