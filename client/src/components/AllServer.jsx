import React, { Component } from 'react';
import Divider from 'material-ui/Divider';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import LinearProgress from 'material-ui/LinearProgress';
import {IndexLink} from 'react-router';

const style = {

  height: 400,
  width: 500,
  margin: 20,
  marginLeft:150,
  textAlign: 'center',
  display: 'inline-block',
};

class AllServer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      completed: 0,
    };
  }

  componentDidMount() {
    this.timer = setTimeout(() => this.progress(5), 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  progress(completed) {
    if (completed > 100) {
      this.setState({completed: 100});
    } else {
      this.setState({completed});
      const diff = Math.random() * 10;
      this.timer = setTimeout(() => this.progress(completed + diff), 1000);
    }
  }

 render() {
   return (
    
<div >
 
      
  <IndexLink to="/App/ContainerInfo" activeClassName="active" style= {{ textDecoration: 'none', width: '100%'}}>
    <Paper style={style} rounded={true}>
   <h2 style={{background:"#a7abb2",color:"white",margin:0,height:40}}> Server 1</h2>
    <List style={{textAlign:"left"}}>
   
      <ListItem primaryText="Swarm:"  />
      <ListItem primaryText="Created:" />
      <ListItem primaryText="Updated:" />
      <ListItem  style={{fontWeight:"bold"}}><span> CPU: <LinearProgress mode="determinate" value={this.state.completed} color={"red"} size={2} style={{height:"10"}}/> </span> </ListItem>
      <ListItem style={{fontWeight:"bold"}}> Memory: <LinearProgress mode="determinate" value={this.state.completed} style={{height:"10"}}/></ListItem>
     
    </List>
    </Paper>
     </IndexLink>
    <Paper style={style} >
     <h2 style={{background:"#a7abb2",color:"white",margin:0,height:40}}>Server 2</h2>
     <List style={{textAlign:"left"}}>
      <ListItem primaryText="Swarm:"  />
      <ListItem primaryText="Created:"  />
      <ListItem primaryText="Updated:"  />
       <ListItem style={{fontWeight:"bold"}}><span> CPU: <LinearProgress mode="determinate" style={{height:"10"}}/> </span> </ListItem>
      <ListItem style={{fontWeight:"bold"}}> Memory: <LinearProgress mode="determinate" style={{height:"10"}}/></ListItem>
    </List>
   </Paper>
   
 </div>
);
       
     
   
 }
}

export default AllServer;