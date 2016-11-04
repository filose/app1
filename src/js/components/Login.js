import React from 'react';
import { Link } from 'react-router';

const Login = React.createClass({
  handleLogin(e){
    const form = this.refs.loginForm;
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    // 1. Prevent default form submission
    e.preventDefault();
    // 2. Call login action creater, pass form.reset() to successCallback
    this.props.userLogin(
      email,
      password,
      this.refs.loginForm.reset()
    );
  },

  render(){
    return (
      <div>
        <form ref="loginForm" onSubmit={this.handleLogin}>
          <input type="email" ref="email" placeholder="Email" />
          <input type="password" ref="password" placeholder="Password" />
          <button type="submit">Log in</button>
        </form>
        <Link href="/register">Don’t have an account yet?</Link>
      </div>
    );
  }
});

export default Login;
