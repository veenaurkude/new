// import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateButton } from './actions';
import buttons from './buttons';

function App() {
  const dispatch = useDispatch();
  const buttonData = useSelector((state) => state);

  const handleButtonClick = (button) => {
    const count = buttonData[button.name] || 0;
    dispatch(updateButton(button.name, count + 1));
  };

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Button Name</th>
            <th>Click Count</th>
            <th>Increment</th>
          </tr>
        </thead>
        <tbody>
          {buttons.map((button) => (
            <tr key={button.id}>
              <td>{button.name}</td>
              <td>{buttonData[button.name] || 0}</td>
              <td>
                <button onClick={() => handleButtonClick(button)}>
                  Click Me!
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;



// --------------------------------------------------------------------------------------------

// import React from "react";
// import Button from "./Components/Button";
// import Style from "./App.module.css";
// import { increaseBtnCount } from "./redux/todoReducer";
// import { useDispatch, useSelector } from "react-redux";

// const App = () => {
//   const dispatch = useDispatch();
//   const selector = useSelector((state) => state.increase);
//   const array = [
//     "A",
//     "B",
//     "C",
//     "D",
//     "E",
//     "F",
//     "G",
//     "H",
//     "I",
//     "J",
//     "K",
//     "L",
//     "M",
//     "N",
//     "O",
//     "P",
//     "Q",
//     "R",
//     "S",
//     "T",
//     "U",
//     "V",
//     "W",
//     "X",
//     "Y",
//     "Z",
//     "A1",
//     "B1",
//     "C1",
//     "D1",
//   ];

//   return (
//     <div className={Style.root}>
//       <div className={Style.buttons}>
//         {array.map((ele, ind) => {
//           return (
//             <Button
//               key={ind}
//               value={ele}
//               dispatch={dispatch}
//               increaseBtnCount={increaseBtnCount}
//               name={ele}
//             />
//           );
//         })}
//       </div>
//       <div>
//         <table>
//           <thead>
//             <tr>
//               {array.map((ele, ind) => {
//                 return <th key={ind}>{ele}</th>;
//               })}
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               {array.map((ele, ind) => {
//                 return <td key={ind}>{selector[ele]}</td>;
//               })}
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default App;