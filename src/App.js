import { useState } from 'react';
import "./App.css";

function App() {
  const [msg, setMsg] = useState([]);
  const mousehover = () => {
    setMsg([
      ...msg, 
      { time: new Date().toLocaleString(), eventname: 'Mouse Hover', tag:"h1" },
    ]);
    // console.log(msg);
  };

  const mouseouts = () => {
    setMsg([
      ...msg,
      { time: new Date().toLocaleString(), eventname: 'Mouse out',tag:"h1" },
    ]);
  };

  const mousehoverh2 =() =>{
    setMsg([
      ...msg,
      { time: new Date().toLocaleString(), eventname: 'Mouse Hover', tag:"h2"
      },
    ]);
  }

  const mouseoutsh2 = () => {
    setMsg([
      ...msg,
      { time: new Date().toLocaleString(), eventname: 'Mouse out',tag:"h2" },
    ]);
  };

  return (
    <>
      <h1 onMouseOver={mousehover} onMouseOut={mouseouts}>
        I am H1
      </h1>
      <h2 onMouseOver={mousehoverh2} onMouseOut={mouseoutsh2}>I am H2</h2>
      <div> 
        <table>
          <thead>
            <tr>
              <td>Time</td>
              <td>Event</td>
              <td>Tag</td>
            </tr>
          </thead>
          <tbody>
            {msg.map((el) => (
              <tr>
                <td>
                  {el.time} 
                </td>
                <td>
                  {el.eventname}
                </td>
                <td>
                  {el.tag}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;