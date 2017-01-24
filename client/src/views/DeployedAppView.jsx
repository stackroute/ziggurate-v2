import React from 'react';
import DeployedApp from '../components/DeployedApp';
import Request from 'superagent';

export default class DeployedAppView extends React.Component {

	constructor() {
    super();
    this.state={
      result:{}
      
    };
  }

	// componentDidMount() {
	//    Request
 //          .get('http://172.23.238.220:9080/api/v1/api/appDetails')
 //          .then((res)=>{
 //            console.log("Getting Value"+res.body[0].services[0].name);

 //              localStorage.setItem("allData",res.body[0]);          
 //              localStorage.setItem("appData",res.body[0].appName);
 //              localStorage.setItem("deployId",res.body[0].deploymentId);
 //              localStorage.setItem("domainName",res.body[0].domainName);
 //              localStorage.setItem("status",res.body[0].status);


 //              res.body.map((data)=>{
 //              	console.log("Hai"+data.appName);
 //              });
           
             
 //            // console.log("dpId"+this.state.result[0].deploymentId);
 //            // console.log("appName"+this.state.result[0].appName);
 //            // console.log("domainName"+this.state.result[0].domainName);

 //          });
 //   }

 render() {
     return (
       
        <div >
        <DeployedApp />
        </div>
         );
 }
}
