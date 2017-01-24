import React from 'react';
import Home from '../components/Home';

export default class DashboardView extends React.Component {

    static get contextTypes() {
    return {
      socket: React.PropTypes.object.isRequired
    };
  }

  constructor() {
    super();
    this.state = {
      containers : 0,
      services: 0
    }
  }

  componentDidMount() {
    this.context.socket.emit('getDashboardData', 'test');
  	this.context.socket.on('dashboard', (data) => {
      this.setState(data);
  	});
  }

  render() {
    return (
      <div>
        <div className='container-fluid'>
        <Home containers = {this.state.containers} services = {this.state.services}/>
        </div>
        </div>
    );
  }
}