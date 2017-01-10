import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import CircularProgressbar from 'react-circular-progressbar';



export default class RepositoryDetails extends React.Component {
  static get propTypes() {
    return {
      onSubmit: React.PropTypes.func.isRequired
    }
  }

  state = {
    value: 1,
  };

  handleChange = (event, index, value) => this.setState({value});

  render() {
    

    return (
      <div>
      
      <div style={{marginTop:20}}>
      <h2 style={{textAlign:"center"}}>Choose Repository and Branch</h2>
      <div style={{}}>
       <SelectField
          floatingLabelText="Select Repositary"
          value={this.state.value}
           onChange={this.handleChange}
          >
          <MenuItem value={1} primaryText="Repositary1" />
          <MenuItem value={2} primaryText="Repositary2" />
          <MenuItem value={3} primaryText="Repositary3" />
          <MenuItem value={4} primaryText="Repositary4" />
          <MenuItem value={5} primaryText="Repositary5" />
        </SelectField>
       <br/>
       <SelectField
          floatingLabelText="Select Branch"
          value={this.state.value}
           onChange={this.handleChange}
            >
         <MenuItem value={1} primaryText="Repositary1" />
          <MenuItem value={2} primaryText="Repositary2" />
          <MenuItem value={3} primaryText="Repositary3" />
          <MenuItem value={4} primaryText="Repositary4" />
          <MenuItem value={5} primaryText="Repositary5" />
        </SelectField>
       <br/>
     </div>
       
       </div>
        <RaisedButton label="Next" primary={true} 
         />
    
   </div> 
    );
  }
}
