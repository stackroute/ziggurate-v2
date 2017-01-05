import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import SelectField from 'material-ui/SelectField';
import Paper from 'material-ui/Paper';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {pinkA200, transparent} from 'material-ui/styles/colors';
import {GridList, GridTile} from 'material-ui/GridList';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import Checkbox from 'material-ui/Checkbox';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import CircularProgress from 'material-ui/CircularProgress';
import Todo from './Popover';
import RedisPart from './RedisPart';
import Autoscaling from './AutoScaling';
import MongoPart from './MongoPart';

const style = {style1:{
 height: 350,
 width: 500,
 marginTop: 30,
 marginLeft:400,
 align: 'center',
 display: 'inline-block',
},
style2:{
position:"fixed",
bottom:50,
right:150,
},
style3:{
 marginLeft:20,
 marginTop:10
}, 
domain: {
  fontWeight: 'bold',
  }
};
 
class ServicePage extends Component {
	
    state = {
    
     open: false,
  };
  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  };
  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };
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
  
 
 
  constructor(props) {
    super(props);
    this.state = {value: 1};
  }

  handleChange = (event, index, value) => this.setState({value});

 
  render() {
    const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px'};

    return (
      <div>
      
      <div >
     
      <div style={{marginTop:0}}>
      <h2 style={{textAlign:"center"}}>Configure Microservices</h2>
      <div style={{}}>
        <GridList
      cellHeight={62} 
          >
      
    
        <GridTile style={{paddingTop:20}}>

         
    
        <RaisedButton style={{width:300}}
          onTouchTap={this.handleTouchTap}
          label="App"
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
          style={{marginTop:0,marginLeft:20, width:550}}
        >
         <form onSubmit={this.handleSubmit} >
          <Menu >
            <MenuItem>
                  <RedisPart />
            </MenuItem>
            <MenuItem>
                 <MongoPart />
            </MenuItem>
            <MenuItem>
                 <Todo />
            </MenuItem>
            <MenuItem style={{fontWeight:'bold'}} primaryText="Queue-->" />
            <MenuItem>
          
       
             <RadioButtonGroup style={{marginLeft:5}}>
                <RadioButton
                  value="Worker Queue"
                  label="Worker Queue"
                />
                <RadioButton
                  value="Pub/sub"
                  label="Pub/sub"
                />
             </RadioButtonGroup>
         
            </MenuItem>
           <MenuItem>
           <div style={{marginTop:15}}>
              <Autoscaling />
              </div>
          </MenuItem>
          </Menu>

         
          <button style={{margin:12, marginLeft:200}}> config</button>
          </form>
        </Popover>
        
        
        </GridTile>
        <GridTile
        
          title="Mongo_db,Redis,GITHUB_CLIENT_ID......."
          
        >
        </GridTile>
         <GridTile style={{paddingTop:20}}>
        <RaisedButton style={{marginTop:50}, {width:300}}
          onTouchTap={this.handleTouchTap}
          label="Chat"
        />
        </GridTile>
        <GridTile
          title="Mongo_db,Redis,GITHUB_CLIENT_ID......."
          
        >
        </GridTile>
          
          
      
    
    </GridList>
       
       <br/>
     </div>
       
       </div>
     <RaisedButton label="Next" primary={true} style={{margin:12}} />
        
      </div>
      </div>
    );
  }
}

export default ServicePage;