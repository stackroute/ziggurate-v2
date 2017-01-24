import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import CircularProgressbar from 'react-circular-progressbar';
import Request from 'superagent'



export default class RepositoryDetails extends React.Component {
 static get propTypes() {
   return {
    setRepository: React.PropTypes.func.isRequired

   }
 }
constructor() {
 super();
  this.state = {
   repository:[{}],
   branches:[],
   isButtonDisabled: true,
   selectedRepository:'',
   owner:''   

};
 
}
componentWillMount() {
  console.log(localStorage.user);
  var user=JSON.parse(localStorage.user||null);
  if(user!==null)
  {
    var login=user.login;
    this.setState({
      owner:login
    })
  }
Request
      .get("https://api.github.com/users/"+login+"/repos")
      .then((res) => {
       this.setState({
          repository: res.body,
        });
      });
     
   
 }    


loadBranches= (repo) => {
     Request
      .get("https://api.github.com/repos/"+this.state.owner+"/"+repo+"/branches")
      .then((res) => {
       this.setState({
         branches: res.body,
         
        });
     });
      };

 
 handleChangeBranch=(event, index, value) => {
  event.preventDefault();
     
   this.setState({selectedBranch:value,isButtonDisabled: false});

}
   
 
 render() {

     const repoName=this.state.repository.map((repo) => {
      return (
         <MenuItem key={repo.name} value={repo.name} primaryText={repo.name}/>
         );

    });

    const branchName=this.state.branches.map((branch) => {

      return (
         <MenuItem key={branch.name} value={branch.name} primaryText={branch.name}/>
         );

    });

  return (
     <div>
     <form onSubmit={this.handleRepositorySelected.bind(this, this.state.selectedRepository,this.state.selectedBranch) }>
     <div style={{marginTop:20}}>
     <h2 style={{textAlign:"center"}}>Choose Repository and Branch</h2>
     <div style={{}}>
     
      <SelectField
         floatingLabelText="Select Repositary"
         value={this.state.selectedRepository}
         onChange={(event, target, value) => {
          event.preventDefault();
            this.loadBranches.apply(this, [value]);
            this.setState({selectedRepository: value, selectedBranch: null,isButtonDisabled: false});
         }}>
       {repoName}
       </SelectField>
      <br/>
      <SelectField
         floatingLabelText="Select Branch"
         value={this.state.selectedBranch}
         disabled={!this.state.selectedRepository }
          onChange={this.handleChangeBranch}
           >
        {branchName}
         
       </SelectField>
      <br/>
    </div>
     
      </div>
       <RaisedButton label="Next" primary={true}
       disabled={ this.state.isButtonDisabled}
       type= 'submit'
               />
     
       
   </form>
  </div>
   );
 }


 handleRepositorySelected ( repo , branch)
 { 

   this.setState({
     isButtonDisabled:true,
     
   });
   
   this.props.onSubmit(repo,branch);
   console.log(this.state.isButtonDisabled);
   console.log(":")

   
   
// =======
//    repository:[],
//    branches:[]

//  };
// }


// componentDidMount() {
//  this.setState({repository:['sagarpatke/tasker','akanksha152/tasker', 'ebin011/chatProject']}),
//  this.setState({branches:['docker-integration','dev']})
// }

//  handleChangeRepo = (event, index, value) => this.setState({selectedRepository:value,selectedBranch:null});
//  handleChangeBranch=(event, index, value) => this.setState({selectedBranch:value})
 
//  render() {
     
//      const repoName=this.state.repository.map((repo) => {

//        return (
//          <MenuItem key={repo} value={repo} primaryText={repo}/>
//          );

//      });

//      const branchName=this.state.branches.map((branch) => {

//        return (
//          <MenuItem key={branch} value={branch} primaryText={branch}/>
//          );

//      });

//    return (
//      <div>
//      <form onSubmit={ this.handleRepositorySelected.bind(this, this.state.selectedRepository,this.state.selectedBranch) }>
//      <div style={{marginTop:20}}>
//      <h2 style={{textAlign:"center"}}>Choose Repository and Branch</h2>
//      <div style={{}}>
     
//       <SelectField
//          floatingLabelText="Select Repositary"
//          value={this.state.selectedRepository}
//           onChange={this.handleChangeRepo}
//          >
//        {repoName}
//        </SelectField>
//       <br/>
//       <SelectField
//          floatingLabelText="Select Branch"
//          value={this.state.selectedBranch}
//          disabled={!this.state.selectedRepository}
//           onChange={this.handleChangeBranch}
//            >
//         {branchName}
         
//        </SelectField>
//       <br/>
//     </div>
     
//       </div>
//        <RaisedButton label="Next" primary={true}  
//        disabled={!this.state.selectedBranch}
//        type= 'submit'
//                />

   
       
//    </form>

//   </div>
//    );
//  }
//  handleRepositorySelected(repo,branch)
//  {
//    this.props.onSubmit(repo,branch);
// >>>>>>> 4e18500cd759ddd02cf9951360b99406d855f93b

 }
}