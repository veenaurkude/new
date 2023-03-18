import React from 'react';
import "./Login.Module.css";

const Login = () => {

  function logInHandle(){
    alert("Log in successful");
  }
  return(
    <div  className='login'>
      <form>
        <input type="email" placeholder="Email Id" required />
        <br /><br/>
        <input type="password" placeholder="Password.." required/>
        <br /><br/>
        <button type="submit" onClick={logInHandle} className="loginBtn"> Login</button>
        <br /><br/>
      </form>
    </div>
  )
}
export default Login;




// function Login() {
    
//   return(
//       <>
//             <label className='label' htmlFor="firstName">Your Email</label>
//             <input className='loginInput' type="email" name="firstName"/>

//             <label className='label' htmlFor="lastName">Password</label>
//             <input className='loginInput' type="password" name="lastName" />

//             <div className="rem-for">
//       <div className="checkBox">
//         <input type="checkbox" name="remember" />
//         <label htmlFor="remember" style={{fontSize:10}}>Remember Me</label>
//       </div>
//       <span style={{color:'gray', fontSize:12, cursor:'pointer'}}>forgot password?</span>
//       </div>
//           </>
//   )
// }

// export default Login;
