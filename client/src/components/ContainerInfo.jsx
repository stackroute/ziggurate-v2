import React, { Component } from 'react';
import Divider from 'material-ui/Divider';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import LinearProgress from 'material-ui/LinearProgress';
const style = {

 
  width: 500,
  margin: 20,
  marginLeft:150,
  textAlign: 'center',
  display: 'inline-block',
};



class ContainerInfo extends Component {
constructor() {
super();
this.state = {
drawerOpen: false,
};
}

  render() {
    return(

<div>
 
<div >
      <h1 style={{textAlign:"center"}}>Instance of App</h1>
    <Paper style={style} >
    <h2 style={{background:"#a7abb2",color:"white",margin:0,height:40}}>Container 1</h2>
    <List style={{textAlign:"left"}}>
      <ListItem primaryText="ID:"  />
      <ListItem primaryText="Service-ID:" />
      <ListItem primaryText="Image Name:" />
      <ListItem primaryText="Created:" />
      <ListItem primaryText="Updated:" />
      <ListItem  style={{fontWeight:"bold"}}><span> CPU: <LinearProgress mode="determinate" value={this.state.completed} color={"red"} size={2} style={{height:"10"}}/> </span> </ListItem>
      <ListItem style={{fontWeight:"bold"}}> Memory: <LinearProgress mode="determinate" value={this.state.completed} style={{height:"10"}}/></ListItem>
    </List>
    </Paper>
    <Paper style={style} >
    <h2 style={{background:"#a7abb2",color:"white",margin:0,height:40}}>Container 1</h2>
    <List style={{textAlign:"left"}}>
      <ListItem primaryText="ID:"  />
      <ListItem primaryText="Service-ID:" />
      <ListItem primaryText="Image Name:" />
      <ListItem primaryText="Created:" />
      <ListItem primaryText="Updated:" />
      <ListItem  style={{fontWeight:"bold"}}><span> CPU: <LinearProgress mode="determinate" value={this.state.completed} color={"red"} size={2} style={{height:"10"}}/> </span> </ListItem>
      <ListItem style={{fontWeight:"bold"}}> Memory: <LinearProgress mode="determinate" value={this.state.completed} style={{height:"10"}}/></ListItem>
    </List>
    </Paper>
   </div> 
</div>


   );

    }
}

export default ContainerInfo;