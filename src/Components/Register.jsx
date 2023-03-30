import React from 'react';
import './Login.Module.css';

function Regiter() {
  return (
    <div className="Login">
      <h1>Register Page</h1>
      <form>
        <input type="email" placeholder="Enter Email" required />
        <br />
        <br />
        <input type="text" placeholder="UserName" required />
        <br />
        <br />
        <input type="password" placeholder="Enter Password" required />
        <br />
        <br />
        <button>Register</button>
      </form>
    </div>
  );
}
export default Regiter;
