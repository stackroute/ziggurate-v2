
import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class App extends Component {
 render() {
   return (
     <div>
     <AppBar
        title="Title"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
      <Card>
   <CardHeader
     title="URL Avatar"
     subtitle="Subtitle"
     avatar="images/jsa-128.jpg"
   />
   <CardMedia
     overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
   >
     <img src="images/nature-600-337.jpg" />
   </CardMedia>
   <CardTitle title="Card title" subtitle="Card subtitle" />
   <CardText>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
     Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
     Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
   </CardText>
   <CardActions>
     <FlatButton label="Action1" />
     <FlatButton label="Action2" />
   </CardActions>
 </Card>
 </div>
);
       
     
   
 }
}

export default App;