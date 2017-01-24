import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
// import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
// import FlatButton from 'material-ui/FlatButton';



const style = {
height: 'auto',
width: 600,
marginLeft:350,
marginTop:60,
padding: 0,
paddingBottom: 10,
textAlign: 'center',
display: 'inline-block',
};

const styless = {
marginTop: 50,
marginLeft:40
};
const stylesss1= {
float:"left",
};
const stylesss2= {
float:"right",
 
};
const styles1= {
marginLeft:24,
 
};
const styles2= {
marginLeft:36,
 
};
const styles3= {
marginLeft:32,
 
};
class BranchService extends Component {

constructor(props) {
    super(props);

    this.state = {
      open: false,
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

render() {
  return (
    <div>
   
   
  <Paper style={style} zDepth={1} >


   <div style = {{backgroundColor: '#D5DBDB  ',padding: 5}}>
   <h2 style = {{textAlign: 'center', margin: 0}}>BranchName_ServiceName</h2>
 

   </div>

   <List style={{textAlign: 'left'}}>
   <ListItem
   
   style={{fontSize: '19px'}}
   disabled ={true}
   primaryText={<div><strong>Service ID : </strong></div>} />


 <ListItem
   
   style={{fontSize: '19px'}}
   disabled ={true}
   primaryText={<div><strong>Created :</strong></div>} />


<ListItem
   
   style={{fontSize: '19px'}}
   disabled ={true}
   primaryText={<div><strong>Updated : </strong></div>} />


<ListItem
   
   style={{fontSize: '19px'}}
   disabled ={true}
   primaryText={<div><strong>Running Replicas : </strong></div>} />

   <ListItem
   
   style={{fontSize: '19px'}}
   disabled ={true}
   primaryText={<div><strong>ImageName : </strong></div>} />

   <ListItem
   
   style={{fontSize: '22px',color:'#4CAF50 '}}
   disabled ={true}
   primaryText={<div><strong>Health :</strong></div>} />


</List>

   <div>
   
   <RaisedButton label="View Logs" primary={true} style={styless}/>
   <RaisedButton
          onTouchTap={this.handleTouchTap}
          label="Scale Management"
          primary={true} style={styless}
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
        >
         <Menu>
         <MenuItem  >
          Min_Replica :
          <input style={styles1}/>
          </MenuItem>
          <MenuItem  >
          Min_value  :
          <input style={styles2}/>
          </MenuItem>
         
          <MenuItem >
          Max_value  :
          <input style={styles3}/>
          </MenuItem>
          <MenuItem>
          <RaisedButton label="OK" primary={true} style={stylesss1} />
          <RaisedButton label="Cancel" primary={true} style={stylesss2} />
          </MenuItem>

          
      
        </Menu>
        </Popover>

   </div>
 
  </Paper>

</div>
);
      
    
  
}
}

export default BranchService;