
import React, { Component } from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import LinearProgress from 'material-ui/LinearProgress';
import {IndexLink} from 'react-router';
import SelectRepo from './SelectRepo';
import SelectApp from './SelectApp';
import ServicePage from './ServicePage';
const style = {
  paper: {
    padding: '50px',
    margin: '10px',
    width:800
  }
};

class Deploy extends Component {

 

 render() {
   
   	const arr=[];
   	arr.unshift(<SelectRepo setRepository={this.handleSetRepository.bind(this)} />);
    arr.unshift(<ServicePage />);
   	 if(this.state.selectedRepository && this.state.selectedBranch)
   	 {
   	arr.unshift(<SelectApp />);
   	 }


const items = arr.map((item, index) => {
	console.log("index:"+arr.length);
      return (
        <Paper
          key={arr.length - index}
          zDepth={2}
          style={style.paper}
           >
          {item}
        </Paper>
        
      );
    });

  return(	 
<div >
 	  
      {items}
   
 </div>
);

 }
}

export default Deploy;