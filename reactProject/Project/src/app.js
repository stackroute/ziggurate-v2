import React, { Component } from 'react';
import Header from './appBar'



class App extends Component {
 render() {
   console.log("hello");
   return (
            <div>
               <Header />

               <div className="main" >
                   {this.props.children}
               </div>

              
           </div>
   );
 }
}

export default App;