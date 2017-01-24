import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import Menu from 'material-ui/Menu';
import Request from 'superagent';



const style = {
height: 200,
width: 400,
marginLeft:350,
marginTop:100,
padding: 0,
paddingBottom: 10,
textAlign: 'center',
display: 'inline-block',
};


class ServiceInfo extends Component {

constructor(props) {
   super(props);

  this.state = {
     open: false,
     allData:[]
   };
 }

handleTouchTap = (event) => {
   // This prevents ghost click.
   event.preventDefault();

  this.setState({
     open: true,
     anchorEl: event.currentTarget,
   });
 };

handleRequestClose = () => {
   this.setState({
     open: false,
   });
 };


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
  const serviceDetails=this.state.allData.map((data)=>{
    //console.log("Getting Value"+res.body[0].services[0].name);
 return (
   <div>
 
 
 <Paper style={style} zDepth={1} >


 <div style = {{backgroundColor: '#D5DBDB   ',padding: 5}}>
  <h2 style = {{textAlign: 'center', margin: 0}}>{data.services[0].name}</h2>

 </div>

 <List style={{textAlign: 'left'}}>
  <ListItem
 
  style={{fontSize: '19px'}}
  disabled ={true}
  primaryText={<div><strong>Key :{data.services[0].config[0].key} </strong></div>} />


<ListItem
 
  style={{fontSize: '19px'}}
  disabled ={true}
  primaryText={<div><strong>Value :{data.services[0].config[0].value}</strong></div>} />





</List>

 

</Paper>

</div>
);
 });

 return(<div>{serviceDetails}</div>);
     
   
 
}
}

export default ServiceInfo;