import React, { useState } from "react";
export default function App(){
const [state,setState]=useState([])
fetch('https://jsonplaceholder.typicode.com/todos')
.then(response => response.json())
//.then(json => console.log(json))
.then(json => setState(json))

  return (
    <>
      <h2>hellooo</h2>
      <table border='1px'>
      {state.map((val)=>
     <tr> <td>{val.id}</td><td>{val.title}</td></tr>)}
      </table>
    </>
  )
}