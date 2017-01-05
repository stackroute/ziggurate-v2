import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import CircularProgressbar from 'react-circular-progressbar';
import request from 'superagent';





export default class SelectRepo extends React.Component {
  constructor() {
    super();
    this.state = {
    value: 1,
    value2:1,
    repositories: [],
    branches: []

    };
  }
  static get propTypes() {
    return(
      {
        setRepository: React.PropTypes.func.isRequired
      });
  }
   componentDidMount() {
    request
      .get('http://localhost:8080/ziggurate')
      .end((err, response) => {
       for(var m in response.body)
 {
   console.log(response.body.repository);
     }   
      });
  }

  loadBranches(repo) {
    request.get('http://localhost:8080/ziggurate/?branch')
      .end((err, response) => {
        this.setState({branches: response.body});
      });
  }


  render() {
    const repositories = this.state.repositories.map((repository) => {
      return (
        <MenuItem key={repository} value={repository} label={repository} primaryText={repository} />
      );
    });

    const branches = this.state.branches.map((branch) => {
      return (
        <MenuItem key={branch} value={branch} label={branch} primaryText={branch} />
      );
    });

    return (
      <div>
      
      <div style={{marginTop:20}}>
      <h2 style={{textAlign:"center"}}>Choose Repository and Branch</h2>
      <div style={{}}>
       <SelectField
          floatingLabelText="Select Repositary"
          value={this.state.selectedRepository}
          onChange={(event, target, value) => {
            this.setState({selectedRepository: value, selectedBranch: null});
          }}>
         {repositories}
        </SelectField>
       <br/>
       <SelectField
          floatingLabelText="Select Branch"
          value={this.state.selectedBranch}
          disabled={!this.state.selectedRepository}
          onChange={(event, target, value) => {
            this.setState({selectedBranch: value});
            }}
        >
        {branches}
        </SelectField>
       <br/>
     </div>
       
       </div>
        <RaisedButton label="Next" primary={true} 
         disabled={!this.state.selectedBranch }
        onTouchTap={() => {
              this.props.setRepository(this.state.selectedRepository, this.state.selectedBranch);}

            }
         />
    
   </div> 
    );
  }
}