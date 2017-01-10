import React from 'react';

export default class ServiceConfiguration extends React.Component {
  static get propTypes() {
    return {
      value: React.PropTypes.object.isRequired,
      onSubmit: React.PropTypes.func.isRequired
    }
  }

  render() {
    return (
      <small>This is service configuration component.</small>
    );
  }
}