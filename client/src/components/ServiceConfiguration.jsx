import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import Popover from 'material-ui/Popover';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';
import RedisPart from './RedisPart';
import MongoPart from './MongoPart';
import Todo from './Popover';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Autoscaling from './AutoScaling';
import Dialog from 'material-ui/Dialog';

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


export default class ServiceConfiguration extends React.Component {
  static get propTypes() {
    return {
      valueOfService: React.PropTypes.object.isRequired,
      onSubmit: React.PropTypes.func.isRequired
    }
  }
  constructor(props) {
  super();
   this.state = {
    open: false,
    isButtonDisabled: false,
    value: 1
  };
}
 //  state = {
   
 // };
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
   handleOpen = () => {
    this.setState({open: true});
  };
  handleClose = () => {
    this.setState({open: false});
  };
 
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }
  handleChange = (event, index, value) => this.setState({value});
  componentDidMount() {
    this.setState({valueService: this.props.valueOfService})
   // console.log(this.state.valueService.service);
  }
  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        disabled={true}
        onTouchTap={this.handleClose}
      />,
     
    ];
    const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px'};
    var b = this.ArrayOfServices(this.props.valueOfService);
    for(var i in b)
  console.log("finallyyy"+b[i]);

  let services1= b.map((serviceName, i)=> {
     return(
        
      <GridTile key={i} style={{paddingTop:20}}>
      <RaisedButton style={{width:300}}
      onTouchTap={this.handleTouchTap}
      label={serviceName}
      />
       <Dialog
          actions={actions}
          modal={true}
          open={this.state.open}
          style={{width:800, marginLeft:350}}
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
          </form>
        </Dialog>
      </GridTile>  
     
   )
  });

  return(
    <div>
      <div>
        <form  onSubmit={ this.handleServicesConfigured.bind(this,this.state.valueService)}>
          <div >
            <div style={{marginTop:0}}>
              <h2 style={{textAlign:"center"}}>Configure Microservices</h2>
              <div style={{}}>
                <GridList
                  cellHeight={62}>
                  {services1}
                  <br/>
                </GridList>    
              </div>
            </div>
            <RaisedButton label="Next" disabled={ this.state.isButtonDisabled} primary={true} style={{margin:12}} type= 'submit' />
          </div>
        </form>
      </div>
    </div>
  );
  }
  
  handleServicesConfigured(valueService)
  { 
    this.setState({
      isButtonDisabled:true,
      
    });
    
    this.props.onSubmit(valueService);
  }
  ArrayOfServices(valueService){
    var a= [];
    var j=0;
  for(var i in valueService.services){
     a[j] =i
    console.log("service page"+a[j]);
    j++;
  }
  return a;
  }

}