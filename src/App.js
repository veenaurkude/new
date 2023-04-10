// import logo from './logo.svg';
import './App.css';

import { useState } from 'react';
function App() {

  const [random, setRandom] = useState([]);
  const genertae = () => {
    setRandom([...random, Math.round(Math.random() * 100) + 1]);
  };
  return (
    <div>
      <button onClick={genertae}>Generate No</button>
      {random.map((el) => (
        <div className='element'>{el}</div>
      ))}
    </div>
  );
}

export default App;
