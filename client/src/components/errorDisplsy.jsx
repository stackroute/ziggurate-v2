import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

export default class ErrorDisply extends React.Component {
  static get propTypes() {
    return {
      onSubmit: React.PropTypes.func.isRequired
    }
  }
constructor() {
  super();
   this.state = {
    repository:[],
    branches:[],
    isButtonDisabled: true
    

  };
  
}


componentDidMount() {
    this.setState({resultOfConfig: this.props.result})
   // console.log(this.state.valueService.service);
  }
 

 
  
  render() {
      
      

    return (
      <div>
      <form >
      <div style={{marginTop:20}}>
      <h2 style={{textAlign:"center"}}>this.state.resultOfConfig</h2>
      
    </form>
   </div> 
    );
  }
  
}
