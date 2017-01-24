import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';

class Home extends Component {

  render() {
    return(

<div>
    <div>
    <Paper  style={{width: '98%', marginTop: 0,marginLeft:15}}>
         <div>
         <h1 style={{textAlign: 'center', margin:'10', padding:'10'}}>Healthy Systems</h1>
         <Divider/>
         </div>
         <div  style={{justifyContent: 'space-around',textAlign:'center',}}>
         <TableRowColumn>
         <div style= {{marginLeft: '200px',marginTop:'10px'}}>
         <Avatar size={200} backgroundColor='#66BB6A '>1</Avatar>
         <h2 style={{textAlign: 'center'}}>Servers</h2>
         </div>
         </TableRowColumn>
         <TableRowColumn>
         <div style= {{marginLeft: '100px',marginTop:'10px'}}>
         <Avatar size={200} backgroundColor='#66BB6A '>{this.props.containers}</Avatar>
         <h2 style={{textAlign: 'center'}}>Containers</h2>
         </div>
         </TableRowColumn>
         <TableRowColumn>
         <div style= {{marginLeft: '100px',marginTop:'10px'}}>
         <Avatar size={200} backgroundColor='#66BB6A '>{this.props.services}</Avatar>
         <h2 style={{textAlign: 'center'}}>Services</h2>
         </div>
         </TableRowColumn>
         </div>
    </Paper>
    </div>

    <div>
    <Paper  style={{width: '98%', marginTop: 0,marginLeft:15}}>
         <div>
         <h1 style={{textAlign: 'center', margin:'10',padding:'10'}}>Unhealthy Systems</h1>
         <Divider/>
         </div>
         <div  style={{justifyContent: 'space-around'}}>
         <TableRowColumn>
         <div style= {{marginLeft: '200px',marginTop:'10px'}}>
         <Avatar size={200} backgroundColor='#BF360C  '>0</Avatar>
         <h2 style={{textAlign: 'center'}}>Servers</h2>
         </div>
         </TableRowColumn>
         <TableRowColumn>
         <div style= {{marginLeft: '100px',marginTop:'10px'}}>
         <Avatar size={200} backgroundColor='#BF360C  '>2</Avatar>
         <h2 style={{textAlign: 'center'}}>Containers</h2>
         </div>
         </TableRowColumn>
         <TableRowColumn>
         <div style= {{marginLeft: '100px',marginTop:'10px'}}>
         <Avatar size={200} backgroundColor='#BF360C '>--</Avatar>
         <h2 style={{textAlign: 'center'}}>Services</h2>
         </div>
         </TableRowColumn>
         </div>
         </Paper>
         </div>
</div>
   );
        }
}

export default Home;
