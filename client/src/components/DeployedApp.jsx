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
import Request from 'superagent';

const style1 = {

width: 450,
marginLeft: 300,

marginTop:50,
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

constructor() {
    super();
    this.state={
      deployId:'',
      appName:'',
      domainName:'',
      status:'',
      allData:[]
      
    };
  }
	
 componentDidMount() {
	   Request
          .get('http://172.23.238.220:9080/api/v1/api/appDetails')
          .then((res)=>{ 
          this.setState({
              allData:res.body

            });

          });
   }

  

render() {
	console.log("allData"+this.state.allData);
	//this.state.allData.map((data)=>{console.log(data)});
  const length=(this.state.allData).length;
 
 const AppDetails=this.state.allData.map((data,i)=>{
  return (
    <div>
    
 <Paper style={style1} zDepth={1}  >
 
  <h1> {data.appName}</h1>
<h3 style={style5}> Basic info</h3>
<Divider/>
<h4>Deployement ID :{data.deploymentId}</h4>
<h4>Domain Name :{data.domainName}</h4>
<h4>Status :{data.status}</h4>
    
 </Paper>
 
 
 
    </div>
  );
  const Service=data.services.map((sName)=>
  {
    return(
    <div>
    <Paper zDepth={2} >
    <h4>Service:{sName.name}</h4>
    </Paper>
    
    </div>
    );

  });
  });

 return(<div>{AppDetails}</div>);
}

}
export default DeployedApp;