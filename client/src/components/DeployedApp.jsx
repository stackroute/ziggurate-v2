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
	// componentWillMount() {
 //   //  this.setState({deploymentId:this.props.deploymentId, appName: this.props.appName, domainApp:this.props.domainName, status:this.props.status})
 //   // console.log(this.state.deploymentId);
 //  // const getFiles=JSON.stringify(JSON.parse(localStorage.getItem("appData")));
  
 //  const apps=JSON.parse(JSON.stringify(localStorage.getItem("appData")));
 //  const deploy=JSON.parse(JSON.stringify(localStorage.getItem("deployId")));
 //  const dName=JSON.parse(JSON.stringify(localStorage.getItem("domainName")));
 //  const stat=JSON.parse(JSON.stringify(localStorage.getItem("status")));
 //  const all=JSON.parse(JSON.stringify(localStorage.getItem("allData")));
 //  var retrievedData = localStorage.getItem("allData");

 //        this.setState( {
 //        	appName:(JSON.stringify(apps)),
 //        	deployId:(JSON.stringify(deploy)),
 //        	domainName:(JSON.stringify(dName)),
 //        	status:(JSON.stringify(stat)),
 //        	allData: (all)
 //        });

        
        
 //  }
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
 
 const AppDetails=this.state.allData.map((data)=>{
  return (
    <div>
    
   
 <Paper style={style1} zDepth={1} circle={true} >
  <h1> {data.appName}</h1>
<h3 style={style5}> Basic info</h3>
<Divider/>
<h4>Deployement ID :{data.deploymentId}</h4>
<h4>Domain Name :{data.domainName}</h4>
<h4>Status :{data.status}</h4>
<IndexLink to="/app/serviceinfo" activeClassName="active" style={{textDecoration:'none'}}><RaisedButton label="Services" primary={true}/></IndexLink>
     
 </Paper>
 
 
 
    </div>
  );
  });

 return(<div>{AppDetails}</div>);
}
}
export default DeployedApp;