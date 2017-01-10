import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Checkbox from 'material-ui/Checkbox';
 
class RedisPart extends Component {
    
     constructor(props) {
       super(props);
       this.state ={
           showQuery: 0,
           addVal: '',
           checked:false
       }
       
       this.addQuery = this.addQuery.bind(this);
   }
    state = {
    
     open: false,
  };
  

  addQuery() {
        this.setState({showQuery: 1,
          checked: !this.state.checked});
    };
    
 
 
  render() {
    let show = '';
        
       if(this.state.showQuery == 1 && this.state.checked==true)
            show = <TextField disabled={false} hintText="Redis_url" />;
    const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px'};
        
    return (
      <div>
     
            <Checkbox
    name="StylesOverridingInlineExample"
    label="Redis"
    value1="checked"
    checked={this.state.checked}
    onCheck={this.addQuery}
    style={{
      width: '50%',
      
    }}
  />       
        
        {show}
            
      </div>
    );
  }
}
export default RedisPart;