import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import SelectRepo from './SelectRepo';
import SelectApp from './SelectApp';
import ServicePage from './ServicePage';

const style = {


marginLeft:500,
marginTop:60,
padding: 0,
paddingBottom: 10,
textAlign: 'center',
display: 'inline-block',
};

const stylePaper = {
paper:{	
padding: '50px',
margin: '10px',
width:800,
}
};
class Deploying extends Component {
render() {
  
  const arr=[];
   	arr.unshift(<SelectRepo />);
    arr.unshift(<ServicePage />);
   
    arr.unshift(<SelectApp />);
     



const items = arr.map((item, index) => {
	console.log("index:"+arr.length);
      return (
        <Paper
          key={arr.length - index}
          zDepth={2}
          style={stylePaper.paper}
           >
          {item}
        </Paper>
        
      );
    });

  return(	 
<div style={{marginLeft:280}}>
 	  
      {items}
   
 </div>
);
      
    
  
}
}

export default Deploying;