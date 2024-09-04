import React, { useEffect, useState } from "react";
export default function App(){
const [state,setState]=useState(0)
useEffect(()=>{
  console.log('component mounted')
}
)
const handler=()=>{
  setState(state+1);
}
  return (
    <>
      <h2>hellooo</h2>
      <h3>{state+1}</h3>
      <button onClick={handler}>update</button>
    </>
  )
}