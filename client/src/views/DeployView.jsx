import React from 'react';
import RepositoryDetails from '../components/RepositoryDetails';
import ServiceConfiguration from '../components/ServiceConfiguration';
import DomainConfiguration from '../components/DomainConfiguration';

export default class DeployView extends React.Component {
  constructor() {
    super();
    this.deploymentIdAssigned = this.deploymentIdAssigned.bind(this);
    this.state={};
  }

  static get contextTypes() {
    return {
      socket: React.PropTypes.object.isRequired
    };
  }

  componentDidMount() {
    // TODO: All socket.on's should appear here.
    // Remember, not to write any functions here.
    this.context.socket.on('deploymentIdAssigned', this.deploymentIdAssigned);

    this.context.socket.emit('getDeploymentId', {accessToken: 'abc'});
  }

  render() {
    const components = [];
    components.unshift(<RepositoryDetails key="repositoryDetails" onSubmit={this.handleRepositorySelected} />);
    if(this.state.serviceConfiguration) {
      components.unshift(<ServiceConfiguration key="serviceConfiguration" value={this.state.serviceConfiguration} onSubmit={this.handleServicesConfigured} />);
    }
    if(this.state.finalServiceConfiguration) {
      components.unshift(<DomainConfiguration key="domainConfiguration" onSubmit={this.handleDomainConfigured} />);
    }

    return (
      <div>
        <small>This is the deploy view.</small>
        {components}
      </div>
    );
  }

  deploymentIdAssigned(msg) {
    console.log('Server assigned a deployment ID:',msg);
  }

  handleRepositorySelected(selectedRepository) {
    console.log('Selected Repository:', selectedRepository);
  }

  handleServicesConfigured(serviceConfiguration) {
    console.log('Services Configured:', serviceConfiguration);
    this.setState({finalServiceConfiguration: serviceConfiguration});
  }

  handleDomainConfigured(domainConfiguration) {
    console.log('Domain Configured:', domainConfiguration);
  }
}