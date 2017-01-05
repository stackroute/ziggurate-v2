import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import CircularProgressbar from 'react-circular-progressbar';




export default class SelectApp extends React.Component {
  constructor() {
    super();
    this.state = {
    
    };
  }

  render() {

    return (
      <div >
     
      <div style={{marginTop:20}}>
      <h2 style={{textAlign:"center"}}>Configure Application</h2>
      <div style={{}}>
       <TextField
      hintText="App Name"
      floatingLabelText="App Name"
      type="text"
    /><br />
       <TextField
      hintText="Domain Name"
      floatingLabelText="Domain Name"
      type="text"
    /> <span>.ziggurate.blr.stackroute.in</span>
    <br />
     </div>
       
       </div>
        <RaisedButton label="Finish" primary={true}  />
  

    </div>
    );
  }
}