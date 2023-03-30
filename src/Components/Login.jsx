import React from 'react';
import './Login.Module.css';

function Login() {
  return (
    <div className="Login">
      <h1>Login Page</h1>

      <form action="">
        <input type="email" placeholder="Email Id" required />
        <br />
        <br />
        <input type="password" placeholder="Password.." required />
        <br />
        <br />
        <button>Login</button>
      </form>
    </div>
  );
}
export default Login;
