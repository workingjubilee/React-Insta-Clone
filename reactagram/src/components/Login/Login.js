import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      password: ''
    };
  }



  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleLogin = (event) => {
    if (this.state.name === this.state.password && this.state.name.length > 0) {
    window.localStorage.setItem('loggedIn',true);
    console.log(window.localStorage);
  } else {
  }
  }

  render() {
    return (
    <form onSubmit={this.handleLogin}>
      <label>Name: <input type="text" name="name" onChange={this.handleInputChange} /></label>
      <label>Password: <input type="text" name="password" onChange={this.handleInputChange} /></label>
      <button>Log In</button>
    </form>
    )
  }
}

export default Login;
