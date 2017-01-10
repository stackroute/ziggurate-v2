import React from 'react';

export default class DomainConfiguration extends React.Component {
  static get propTypes() {
    return {
      onSubmit: React.PropTypes.func.isRequired
    }
  }

  render() {
    return (
      <small>This is domain configuration component.</small>
    );
  }
}