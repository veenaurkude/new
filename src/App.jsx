// import logo from './logo.svg';
import './App.css';
import Image from './Components/Image';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Limit from './Components/Limit';
import { useState } from 'react';

function App() {

  const[value,setValue]=useState(true)

  function handleClick(){
    setValue(!value);
  }

  return (
    <div style={{marginBottom:"5%"}}>
      <Image></Image>
      <br /><br />
      <Limit></Limit>
      <br /><br />
      
      <div> 
        {value ? <Signup/>: " "}
        {!value ? <Login /> : " "}

        { value ?  <button style={{marginLeft: "45%", padding: "5px 12px",backgroundColor:"cadetblue", color:"#333"}}> Create Account </button> :<button style={{marginLeft: "45%", padding: "5px 12px",backgroundColor:"cadetblue", color:"#333"}} onClick={handleClick}> Create Account</button> }

        { value? <button style={{marginLeft: "1%", padding: "5px 12px", backgroundColor:"cadetblue", color:"#333"}} onClick={handleClick}> SignIn / Login</button> :<button style={{marginLeft: "1%", padding: "5px 12px", backgroundColor:"cadetblue", color:"#333"}}> SignIn / Login</button> }
      </div>
    </div>

  );
}

export default App;
