import React, { Component } from 'react';
import logo from './logo.svg';

import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import DropDownMenu from 'material-ui/DropDownMenu';
import CircularProgress from 'material-ui/CircularProgress';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';

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
 } 
};

const progressData=85;
class App extends Component {
 constructor(props) {
    super(props);
    this.state = {value: 1,value2:1};
  }
componentDidMount() {
    this.timer = setTimeout(() => this.progress(5), 1000);
  }
  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  

  handleChange1 = (event, index, value2) => this.setState({value2});

  handleChange = (event, index, value) => this.setState({value});
  render() {
    return (
       <div>
    <AppBar title="Ziggurate" />
     <Paper style={style.style1} >
       <div>
       <h2 style={{textAlign:"center"}}>Choose Repository and Branch</h2>
       <div style={{marginTop:"100"}}>
        <DropDownMenu value={this.state.value} onChange={this.handleChange} >
          <MenuItem value={1} primaryText="Github Repository" />
          <MenuItem value={2} primaryText="Repository one" />
          <MenuItem value={3} primaryText="Second Repository" />
          <MenuItem value={4} primaryText="Third repository" />
        </DropDownMenu>
        <br/>
        <DropDownMenu value={this.state.value2} onChange={this.handleChange1} >
        <MenuItem value={1} primaryText="Branch" />
        <MenuItem value={2} primaryText="Branch one" />
        <MenuItem value={3} primaryText="Branch Two" />
      </DropDownMenu>
      </div>
        <RaisedButton label="Next" primary={true} style={style.style3} />
        </div>
     </Paper>
     <CircularProgress style={style.style2}
          mode="determinate"
          value={85}
          size={100}
          thickness={8}
        />
  </div>

    );
  }
}

export default App;
