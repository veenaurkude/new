
import React, {useState} from 'react';

import "./Image.Module.css";

function Image() {

  const [todo,setTodo]=useState(0);

  
  const image=[
    "https://tse3.mm.bing.net/th?id=OIP.mWdDcVYEyR-oES3tEMAZngHaEo&pid=Api&P=0",
    
    "https://tse3.mm.bing.net/th?id=OIP.pAB6g3ENvaNnbKx2j1JDQwHaEK&pid=Api&P=0",

    "https://tse1.mm.bing.net/th?id=OIP.IOGGKcmJMYKPkMuimQDLnwHaHv&pid=Api&P=0",

    "https://tse3.mm.bing.net/th?id=OIP.rM81T2vECiRhkckDanbD9QHaEo&pid=Api&P=0"
  ]
  
  const len = image.length;

  function handleChange(){
    if(todo===len-1){
      setTodo(0);
    }
    else{
    setTodo(todo+1);
    }
  }


  return (
    <div className="Parent">
      
      <div className="child">
        
        <img src={image[todo]} alt="Images" />
        &nbsp;
     </div>

     <div>
      <input type="button" value="Change Pic" className='change-btn' onClick={handleChange}/>
     </div>
     
        
    </div>
  );
};

export default Image;

