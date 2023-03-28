import React, { useState } from 'react';
import './Login.Module.css';

function Login() {
    const [isLogin, setIsLogin] = useState(true);
  return (
    <div>
        {/* <h1>Login</h1> */}
        {isLogin ?
        <div className='Login'>
            <form>
                <input type="email" placeholder="Email Id" required />
                <br /><br/>
                <input type="password" placeholder="Password.." required />
            </form>

            <div className="register-flex">
                <div>
                <span>Don't have an account?</span>
                <br />
                <span className="Switch" onClick={()=> setIsLogin(!isLogin)}>Register</span>
                </div>
                <button>Login</button>
             </div>
        </div> 
        :
        <div className="Login">
            <form>
                <input type="email" placeholder="Enter Email" required/>
                <br /><br />
                <input type="text" placeholder="UserName" required />
                <br /><br />
                <input type="password" placeholder="Enter Password" required/>
            </form>
            <div className="register-flex">
                <div>
                <span>Already have account?</span>
                <br />
                <span className="Switch" onClick={()=> setIsLogin(!isLogin)}>Login</span>
                </div>
                <button>Register</button>
            </div>
        </div>
        }
        
        
    </div>
  )
}

export default Login;