import React from 'react';
import ServiceInfo from '../components/ServiceInfo';
import Request from 'superagent';

export default class ServiceInfoView extends React.Component {

  componentDidMount() {
     Request
          .get('http://172.23.238.220:9080/api/v1/api/appDetails')
          .then((res)=>{ 
          console.log("Got Here");          
              localStorage.setItem("allData",res.body);          
              localStorage.setItem("appData",res.body[0].services[0].name);
              localStorage.setItem("deployId",res.body[0].services[0].config);
              // localStorage.setItem("domainName",res.body[0].domainName);
              // localStorage.setItem("status",res.body[0].status);


              res.body[0].services.map((data)=>{
                console.log("Hai"+data.name);
              });
           
             
            // console.log("dpId"+this.state.result[0].deploymentId);
            // console.log("appName"+this.state.result[0].appName);
            // console.log("domainName"+this.state.result[0].domainName);

          });
   }
	

 render() {
     return (
       
        <div >
        <ServiceInfo />
        </div>
         );
 }
}
