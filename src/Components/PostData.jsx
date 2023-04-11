
// "4": [
//   "getposts form https://jsonplaceholder.typicode.com/posts",
//   "show on table",
//   "add remove button",
//   "delete post when click on remove button"
// ]

import axios from 'axios'
import React, {useState , useEffect} from "react"
import "./PostData.Module.css";

const url = "https://jsonplaceholder.typicode.com/posts";

export default function PostData() {

  const [posts, setPosts]= useState([]);
//   const [isvisible, setIsVisible] = useState(true)
  useEffect (()=>{

    axios.get(url).then((response) => {
     setPosts(response.data) 
    });
  }, []);


  const handleDelete = (Id) =>{
    const newData = posts.filter((ele) => ele.id !== Id);
    setPosts(newData);
  }


  return(
    <div>
    <h1>User's Post Data</h1>
    <div>

    <hr/>
    <br />
    </div>
    <table>
      <thead>
        <tr>
          <th>Sr.No.</th>
          <th>UserId</th>
          <th>Id</th>
          <th>Title</th>
          <th>Body</th>
          <th>Actions</th>
          </tr>
          </thead>
          <tbody>
            { posts.map((posts, index) => {
                return (
                  <tr>
                    <td>{index+1}</td>
                    <td>{posts.userId}</td>
                    <td>{posts.id}</td>
                    <td>{posts.title}</td>
                    <td>{posts.body}</td>
                    <td onClick={()=> handleDelete(posts.id)}>❌</td>
                </tr>
                );
              })}
          </tbody>
        </table>
      
    </div>
  )
}

