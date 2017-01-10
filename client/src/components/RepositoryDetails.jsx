import React from 'react';

export default class RepositoryDetails extends React.Component {
  static get propTypes() {
    return {
      onSubmit: React.PropTypes.func.isRequired
    }
  }

  render() {
    return (
      <small>This is RepositoryDetails Component.</small>
    );
  }
}
