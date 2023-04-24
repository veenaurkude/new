// import logo from './logo.svg';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
// import { Form } from "./components/Form";
// import { Todos } from "./components/Todos";
// import {useDispatch, useSelector} from 'react-redux';
// import {deleteAll} from './redux/todoapp/actions';

// function App() {
//   const dispatch = useDispatch();

//   const todos = useSelector((state)=>state.operationsReducer);

//   return (
//     <div className="wrapper">
//       <br></br>
//       <h1 className="text-center">TODO-APP USING REACT-REDUX</h1>
//       <Form/>
//       <Todos/>
//       {todos.length > 1&&(
//         <button className='btn btn-danger btn-md delete-all'
//         onClick={()=>dispatch(deleteAll())}>DELETE ALL</button>
//       )}
//     </div>
//   );
// }

// export default App;




import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./components/style.css";
import { useState } from "react";
import actions from "./components/actions";


export default function App() {
  const [task, setTask] = useState("");

  const todo = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(todo);
  return (
    <div className="App">
      <h1>TODO-APP Using React-Redux</h1>
      <input value={task} placeholder="Add your Todo" onChange={(e) => setTask(e.target.value)} />

      <button
        onClick={() => {
          dispatch({ type: actions.ADD, payload: task });

          setTask("");
        }}
      >
        {" "}
        ADD
      </button>

      {todo.map((x) => (
        <div key={x.id} className="todo-list">
          <p>
            {x.isComplete && "✅"}
            {x.task}
          </p>

          <div>
            <button
              className="btn-one"
              onClick={() => dispatch({ type: actions.COMPLETE, payload: x })}
            >
              Complete
            </button>
            <button
              className="btn-two"
              onClick={() => dispatch({ type: actions.DELETE, payload: x.id })}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}