import React from 'react';
import Home from '../components/Home';

export default class DashboardView extends React.Component {
  render() {
    return (
      <div>
        <div className='container-fluid'>
        <Home />
        </div>
        </div>
    );
  }
}