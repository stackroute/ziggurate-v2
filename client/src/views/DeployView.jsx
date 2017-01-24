import React from 'react';
import CircularProgressbar from 'react-circular-progressbar'
import RepositoryDetails from '../components/RepositoryDetails';
import ServiceConfiguration from '../components/ServiceConfiguration';
import DomainConfiguration from '../components/DomainConfiguration';
import ErrorDisply from '../components/ErrorDisply';
import Paper from 'material-ui/Paper';
import './style.css'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Request from 'superagent';

const style = {
  paper: {
    padding: '50px',
    margin: '10px',
    width:700
  }
};

export default class DeployView extends React.Component {
  constructor() {
    super();
    this.deploymentIdAssigned = this.deploymentIdAssigned.bind(this);
    this.state={
      progress: null,
      inc: 0,
    };
  }

  static get contextTypes() {
    return {
      socket: React.PropTypes.object.isRequired,
      router: React.PropTypes.object.isRequired
    };
  }

  componentDidMount() {
    // TODO: All socket.on's should appear here.
    // Remember, not to write any functions here.
    this.context.socket.on('services', (services) => {
      this.setState({progress: "Cloned Successfully"});
      this.setState({inc: this.state.inc+20});
     console.log('Received Services'+JSON.stringify(services)) ;
     this.setState({serviceConfiguration: services});
   });

   this.context.socket.on('appCreates', (domain) => {
     console.log('App creation part'+domain);
     this.setState({inc: this.state.inc+20});
     this.setState({progress: "Configured successfully"});
     this.setState({finalServiceConfiguration: domain});

     Request
          .get('http://localhost:9080/api/v1/api/'+this.state.deploymentId+'/result')
          .then((res)=>{
            console.log("Getting Value"+res);
            this.setState({
              result:res.body

            });

          });
   });

   this.context.socket.on('lastStep',(msg)=>{
      console.log('Deployed');
      this.setState({deployed:msg}); 
      this.context.router.push('/app/view');
      
   });
   
    this.context.socket.on('deploymentIdAssigned', (deploymentIdAssigned)=>{
      console.log("DeploymentId"+deploymentIdAssigned);
      this.setState({deploymentId:deploymentIdAssigned});
      console.log("LastCheck"+this.state.deploymentId);
    });

    this.context.socket.emit('getDeploymentId', {accessToken: 'abc'});
      console.log(this.state.result);

     
  }

  render() {
   
    const components = [];
    components.unshift(<RepositoryDetails key="repositoryDetails" onSubmit={this.handleRepositorySelected} />);
    if(this.state.serviceConfiguration) {
      components.unshift(<ServiceConfiguration key="serviceConfiguration" valueOfService={this.state.serviceConfiguration} onSubmit={this.handleServicesConfigured} />);
    }
    if(this.state.result){
      // console.log("GetData",this.state.result[0].result);
      components.unshift(<ErrorDisply valueOfResult={this.state.result[0].result} valueOfDepId={this.state.result[0].deployementId}/>)
    }
    if(this.state.finalServiceConfiguration) {
      components.unshift(<DomainConfiguration key="domainConfiguration" dnsChanged={this.handleDnsChanged} />);
    }
    

    const items = components.map((item, index) => {
    console.log("index:"+components.length);
      return (
        <Card
          key={components.length - index}
          zDepth={2}
          style={style.paper}
           >
          {item}
        </Card>
        
      );
    });

    return (
      <div style={{marginLeft:280}}>

       {items} 
       <div style={{textAlign:'center', width:150,height:150, marginLeft:'60%', position:'fixed', bottom: 75}}>
          <CircularProgressbar percentage={this.state.inc}/>
          <h3>{this.state.progress}</h3>
       </div>
      </div>
    );
  }

  deploymentIdAssigned(msg) {
    console.log('Server assigned a deployment ID:',msg);
  }

  handleRepositorySelected = (selectedRepository,selectBranch) => {
    var user=JSON.parse(localStorage.user||null);
     var login
     if(user!==null)
     {
       login=user.login;
       console.log("login name :"+login);
     }
    console.log('Selected Repository:', selectedRepository," ",selectBranch);
    this.setState({progress: "Cloning..."});
    console.log("owner deploy view : "+login);
    console.log(this.state.progress);
     this.context.socket.emit('clone',{repository:selectedRepository,branch:selectBranch,DeploymentId:this.state.deploymentId, owner:login});
  }


  handleServicesConfigured = (value, serviceNameToExpose) => {
    //console.log('Services Configured:', value);
    this.setState({progress: "Configuring Services...."});
    console.log("configuring services....");
    //this.setState({finalServiceConfiguration: serviceConfiguration});
    this.context.socket.emit('convert',{valueOfService: value, serviceNameToExpose: serviceNameToExpose});
  }

   handleDnsChanged = (newData) => {
    console.log('DNS Changed');
   
    let obj = {
      appName: newData.appName,
      domainName: newData.domainName
      };
      console.log("object : "+obj.appName);
      console.log("domainName : "+obj.domainName);
    this.context.socket.emit('domainConfig',obj);
  }
}