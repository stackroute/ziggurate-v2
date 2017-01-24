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
  };
  
}


componentDidMount() {
    this.setState({resultOfConfig: this.props.valueOfResult,Reason:this.props.valueOfDepId})
   console.log(this.state.resultOfConfig);
  }
  
  render() {
      
    return (
      <div>
      <form >
      <div style={{marginTop:20}}>
      <h2 style={{textAlign:"center"}}>{this.state.DepId}</h2>
      <h2 style={{textAlign:"center"}}>{this.state.resultOfConfig}</h2>
      </div>
    </form>

   </div> 
    );
  }
  
}
