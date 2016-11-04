import React from 'react';
import { Link } from 'react-router';

const Register = React.createClass({
  handleRegister(e){
    const form = this.refs.loginForm;
    const username = this.refs.username.value;
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    // 1. Prevent default form submission
    e.preventDefault();
    // 2. Call login action creater, pass form.reset() to successCallback
    this.props.userRegister(
      username,
      email,
      password,
      this.refs.regForm.reset()
    );
  },

  render(){
    return (
      <div>
        <form ref="regForm" onSubmit={this.handleRegister}>
          <input type="text" ref="username" placeholder="Username" />
          <input type="email" ref="email" placeholder="Email" />
          <input type="password" ref="password" placeholder="Password" />
          <button type="submit">Register</button>
        </form>
        <Link href="/login">Already have an account?</Link>
      </div>
    );
  }
});

export default Register;
