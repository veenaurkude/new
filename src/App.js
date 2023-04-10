import { useState } from 'react';
import "./App.css";

function App() {
  
const [count,setCount] = useState(0);
let array = ["Hello", "Greetings", "Happy Birthday", "Have a blissful Evening", "Enjoy tonight"];

function handleCount(){
  if(count < array.length - 1){
    setCount(count + 1);
  }
  else{
    setCount(0);
  }
}
  return (
    <div>
      <button onClick={handleCount}>Next Greetings</button>
      <h1>
        {array[count]}
      </h1>
    </div>
      
  );
}

export default App;