import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

class Minmax extends React.Component {
 

  render() {
    return (
      <div>
      
         <TextField
      hintText="3"
      errorText="This field is required"
      floatingLabelText="Min_value "
      style={{width:40}}
      
    />
    
      <TextField
      style={{width:40,marginLeft: 100}}
      hintText="100"
      errorText="This field is required"
      floatingLabelText="Max_value"
    />
         
      </div>
    );
  }

  
}




export default Minmax;