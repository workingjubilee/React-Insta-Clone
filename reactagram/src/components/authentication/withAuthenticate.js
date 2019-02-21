import React, { Component } from 'react';

const withAuthenticate = Page1 => Page2 => class extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
    }
  }

  componentDidMount() {
      if (localStorage.loggedIn === true) {
      this.setState({
        loggedIn: true
      })
    }
  }

  render() {
    return (
      <Page2 />
  )}
};

export default withAuthenticate;
