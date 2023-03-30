import React from 'react';
import { useState } from 'react';
import './Game.Module.css';
const GenerateNo = function () {
  const [inputNum, setinputNo] = useState('');
  const [rdno, setRandom] = useState(ran());
  const [msg, setMsg] = useState('');
  const [count, setCount] = useState(0);
  // const[again,setAgain]=useState(true)

  function ran() {
    return Math.trunc(Math.random() * 20) + 1;
  }

  function getmsg(inputNum, rdno) {
    const gussNo = +inputNum;
    if (gussNo < rdno) return 'To Low';
    if (gussNo > rdno) return 'To high';
    if (gussNo === rdno) {
      setRandom(ran());
      return 'Congratulation You guessed the no. in';
    }
  }

  function checkguess() {
    setMsg(getmsg(inputNum, rdno));
    setinputNo('');
    setCount(count + 1);
  }

  function handleReset() {
    setCount(0);
    setMsg('');
    setinputNo('');
    setRandom(ran());
  }

  return (
    <div className="Main">
      <div className="Head">
        <h1>Guess The number between 1 and 20</h1>
      </div>

      <div className="Box">
        <input
          type="number"
          value={inputNum}
          onChange={(e) => {
            setinputNo(e.target.value);
          }}
          placeholder="Guess the Lucky Number"
        />
        &nbsp;
        <button onClick={checkguess}>Click Me</button>
      </div>

      <h3>
        {msg} {count} time
      </h3>

      <button onClick={handleReset}>Play Again</button>
    </div>
  );
};

export default GenerateNo;
