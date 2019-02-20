import React, { Component } from 'react';

const withAuthenticate = AnyComponent => class extends Component {
  render() {
    return <AnyComponent />;
  }
};

export default withAuthenticate;
