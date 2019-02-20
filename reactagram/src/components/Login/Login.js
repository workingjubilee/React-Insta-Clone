import React from 'react';

const Login = () => {
  return (
    <form onSubmit="">
      <label>Name: <input type="text" name="name" /></label>
      <label>Password: <input type="text" name="password" /></label>
      <button>Log In</button>
    </form>
  )
}

export default Login;
