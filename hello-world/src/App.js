
import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Paper from 'material-ui/Paper';
import {pinkA200, transparent} from 'material-ui/styles/colors';
import {GridList, GridTile} from 'material-ui/GridList';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import CircularProgress from 'material-ui/CircularProgress';

const style={
  height: 500,
  width: 1300,
  margin: 100,
  border: 20 

}


class App extends Component {
    constructor(props) {
    super(props);

    this.state = {
      open: false,
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
     <AppBar
        title="Ziggurate"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
   
    <Paper style={style} zdepth={1}>
    <h1 style={{textAlign:'center', color:'black'}}> MicroServices Configuration </h1>
     <Divider style={{margin:30}}/>
   
   <GridList
      cellHeight={100} 
          >
      
    
        <GridTile
          title="App"
         
        >
        <RaisedButton
          onTouchTap={this.handleTouchTap}
          label="Microservice config"
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
        >
          <Menu>
            <MenuItem>
            <Checkbox
    name="StylesOverridingInlineExample"
    label="Redis"
    style={{
      width: '50%',
      
    }}
  />
            <input id="Redis"/>
            </MenuItem>
            <MenuItem>
            <Checkbox style={{position:"fixed",float:"left"}}
    name="StylesOverridingInlineExample"
    label="Mongo_db"
    style={{
      width: '50%',
      
    }}
  />
             <DropDownMenu style={{float:"right"}}value={this.state.value} onChange={this.handleChange}>
          <MenuItem value={1} primaryText="Mongo_db" />
          <MenuItem value={2} primaryText="Mongo_d" />
        </DropDownMenu>
      
          <br/>
            <input id="Mongo_db"/>
            </MenuItem>
            <MenuItem>
            <input value="key"/>
            <input value="value"/>
             <FloatingActionButton>
      <ContentAdd />
    </FloatingActionButton>
            </MenuItem>
            <MenuItem primaryText="Queue-->" />
            <MenuItem>
             <div>
       
             <RadioButtonGroup>
                <RadioButton
                  value="Worker Queue"
                  label="Worker Queue"
                />
                <RadioButton
                  value="Pub/sub"
                  label="Pub/sub"
                />
             </RadioButtonGroup>
         
      </div>
            </MenuItem>
           <MenuItem>
              <Checkbox
    name="StylesOverridingInlineExample"
    label="AutoScaling"
    style={{
      width: '50%',
      
    }}
  />
    <DropDownMenu value={this.state.value} onChange={this.handleChange}>
          <MenuItem  >
          Min_value :
          <input/>
          </MenuItem>
         
          <MenuItem >
          Max_value :
          <input/>
          </MenuItem>
      
        </DropDownMenu>
  
  </MenuItem>
          </Menu>
        </Popover>
        
        </GridTile>
        <GridTile
        
          title="Mongo_db,Redis,GITHUB_CLIENT_ID......."
          
        >
        </GridTile>
         <GridTile
                    title="Chat"
          
        >
        
        </GridTile>
        <GridTile
         style={{backgroundColor: '#FFFFFF'}, {color:'#000000'}}
          title="Mongo_db,Redis,GITHUB_CLIENT_ID......."
          
        >
        </GridTile>
          
          
      
    
    </GridList>
    </Paper>

        <CircularProgress
          mode="determinate"
          value={this.state.completed}
          size={120}
         style={{float:'right'}}
          thickness={20}
        />
      </div>
);
       
     
   
 }
}

export default App;