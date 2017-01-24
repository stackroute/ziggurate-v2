import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
const styles={
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
  check: {
    marginLeft: 30,
  },
};
const stylepap={
height: 'auto',
marginLeft:100,
width: 440,
height: 400,
padding: 0,
paddingBottom: 10,
textAlign: 'center',
display: 'inline-block',
};
const styles1= {
marginLeft:10,
};
const styles2= {
marginLeft:10,
};
const styles3= {
marginLeft:10,
};
export default class ConfigureService extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      keys: [],
      values: [],
      showQuery: 0,
       showiQuery: 0,
       showiiQuery: 0,
          addVal: '',
          checked:false,
          checked1: false,
          checked3: false,
    }
    this.addQuery = this.addQuery.bind(this);
    this.makeQuery = this.makeQuery.bind(this);
     this.goQuery = this.goQuery.bind(this);
  }
  state = {
   
    open: false,
 };
 
addQuery() {
       this.setState({showQuery: 1,
         checked: !this.state.checked});
   };
 makeQuery()
 {
  this.setState({showiQuery: 1,
         checked1: !this.state.checked1});
 }; 
 goQuery()
 {
  this.setState({showiiQuery: 1,
         checked3: !this.state.checked3});
 };   
  
  componentWillMount() {
    this.decomposeValue();
  }
  render() {
    let show1 = '';
    let show2 = '';
    let show3 = '';
    if(this.state.showQuery == 1 && this.state.checked==true){
      show1=<Paper style={stylepap} zDepth={1} >
  <div>
 
        <Menu>
       <h4> Please use the following config values to redis</h4>
      <List>
      <ListItem primaryText="{{REDIS_HOST}} "/>
      <ListItem primaryText="{{REDIS_PORT}} "/>
     </List>
        <MenuItem>
         Queue Name:
         <input style={styles1}/>
         </MenuItem>
        <MenuItem  >
         Min_Threshold :
         <input style={styles1}/>
         </MenuItem>
         <MenuItem  >
         Min_Threshold  :
         <input style={styles2}/>
         </MenuItem>
       
         <MenuItem >
         Min_Instances  :
         <input style={styles3}/>
         </MenuItem>
       </Menu>
  </div>
  </Paper>
    }
    const environments = this.state.keys.map((key, index) => {
      return (
        <li key={index}>
          <input type="text" value={key} onChange={this.handleKeyChange.bind(this, index)} />:
          <input type="text" value={this.state.values[index]} onChange={this.handleValueChange.bind(this, index)} />
        </li>
      );
    });
 if(this.state.showiQuery == 1 && this.state.checked1==true){
      show2=<Paper style={stylepap} zDepth={1} >
  <div style={{height: 400}}>
        <h4>{this.state.name}</h4>
        <ul>{environments}</ul>
        <button type="button" onClick={this.handleAddNewEnvironment.bind(this)}>New</button>
        <button type="button" onClick={this.handleSubmit.bind(this)}>Submit</button>
  </div>
  </Paper>
    }
if(this.state.showiiQuery == 1 && this.state.checked3==true){
 show3=
      <Checkbox 
      label="Enable Dynamic Scaling"
      style={styles.check}
      value1="checked"
      checked={this.state.checked}
      onCheck={this.addQuery}
      />
      {show1}
    
}
    return (
      <div>
       <h4> Configure Service View </h4>
       <div>
      <Checkbox 
      label="Producer"
      style={styles.checkbox}
      value2="checked"
      checked1={this.state.checked1}
      onCheck={this.makeQuery}
      />
      {show2}
      </div>
<div>
      <Checkbox
      label="Consumer"
      style={styles.checkbox}
       value3="checked"
      checked3={this.state.checked3}
      onCheck={this.goQuery}
      />
</div>
<div>
{show3}
</div>
   <div>
   {show1}
   </div>
     
        
      </div>
    );
  
}
  decomposeValue() {
    console.log(this.props.value);
    const inputValue = this.props.value;
    console.log("dfg", inputValue);
    const outputState = {};
  //  console.log("asdfghj"+inputValue.name[this.props.i]);
   // console.log('Input value',this.props.name);
   // var b= inputValue.name[this.props.i];
    outputState.name = this.props.name;
 //   console.log("outputstate"+outputState.name);
    // Push keys from inputValue.environment to outputState.keys
    if(!inputValue.environment) { inputValue.environment = {}; }
    console.log('inputValue', inputValue);
    outputState.keys = Object.keys(inputValue.environment);
    // TODO: Push values from inputValue.environment to outputStates.values
    outputState.values = outputState.keys.map((key) => {
      return inputValue.environment[key];
    });
    // Set outputState in state.
    this.setState(outputState);
   
  }
  composeValue() {
    const keys = this.state.keys;
    const values = this.state.values;
    const environment = {};
    keys.forEach((key, index) => {
      environment[key] = values[index];
    });
    console.log('keys:', keys);
    console.log('environment:', environment);
    delete environment[''];
    const value = this.props.value;
    value.environment = environment;
    return value;
  }
  handleSubmit() {
    this.props.onChange(this.composeValue());
  }
  handleAddNewEnvironment() {
    const keys = this.state.keys;
    const values = this.state.values;
    if(keys.indexOf('') < 0) {
      keys.push('');
      values.push('');
      this.setState({keys: keys, values: values});
    }
  }
  handleKeyChange(index, event) {
    const newKey = event.target.value;
    const keys = this.state.keys;
    keys.splice(index, 1, newKey);
    this.setState({keys: keys});
  }
  handleValueChange(index, event) {
    const newValue = event.target.value;
    const values = this.state.values;
    values.splice(index, 1, newValue);
    this.setState({values: values});
  }
}
// import React from 'react';

// export default class ConfigureService extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       name: '',
//       keys: [],
//       values: []
//     }
//   }
  

//   componentWillMount() {
//     this.decomposeValue();
//   }

//   render() {
//     const environments = this.state.keys.map((key, index) => {
//       return (
//         <li key={index}>
//           <input type="text" value={key} onChange={this.handleKeyChange.bind(this, index)} />:
//           <input type="text" value={this.state.values[index]} onChange={this.handleValueChange.bind(this, index)} />
//         </li>
//       );
//     });

//     return (
//       <div>
//         <h1>{this.state.name}</h1>
//         <ul>{environments}</ul>
//         <button type="button" onClick={this.handleAddNewEnvironment.bind(this)}>New</button>
//         <button type="button" onClick={this.handleSubmit.bind(this)}>Submit</button>
//       </div>
//     );
//   }

//   decomposeValue() {
//     console.log(this.props.value);
//     const inputValue = this.props.value;
//     console.log("dfg"+inputValue);
//     const outputState = {};
//   //  console.log("asdfghj"+inputValue.name[this.props.i]);
//    // console.log('Input value',this.props.name);
//    // var b= inputValue.name[this.props.i];
//     outputState.name = this.props.name;
//  //   console.log("outputstate"+outputState.name);
//     // Push keys from inputValue.environment to outputState.keys
//     if(!inputValue.environment) { inputValue.environment = {}; }
//     console.log('inputValue', inputValue);
//     outputState.keys = Object.keys(inputValue.environment);

//     // TODO: Push values from inputValue.environment to outputStates.values
//     outputState.values = outputState.keys.map((key) => {
//       return inputValue.environment[key];
//     });

//     // Set outputState in state.
//     this.setState(outputState);
   
//   }

//   composeValue() {
//     const keys = this.state.keys;
//     const values = this.state.values;
//     const environment = {};
//     keys.forEach((key, index) => {
//       environment[key] = values[index];
//     });
//     console.log('keys:', keys);
//     console.log('environment:', environment);

//     delete environment[''];

//     const value = this.props.value;
//     value.environment = environment;

//     return value;
//   }

//   handleSubmit() {
//     this.props.onChange(this.composeValue());
//   }

//   handleAddNewEnvironment() {
//     const keys = this.state.keys;
//     const values = this.state.values;

//     if(keys.indexOf('') < 0) {
//       keys.push('');
//       values.push('');
//       this.setState({keys: keys, values: values});
//     }
//   }

//   handleKeyChange(index, event) {
//     const newKey = event.target.value;
//     const keys = this.state.keys;

//     keys.splice(index, 1, newKey);

//     this.setState({keys: keys});
//   }

//   handleValueChange(index, event) {
//     const newValue = event.target.value;
//     const values = this.state.values;

//     values.splice(index, 1, newValue);

//     this.setState({values: values});
//   }
// }

