import React from 'react'
import  { useState } from 'react'
export default function App() {
  const name=['A','B','C']
  const [state,setState]=useState(name)
  const handler=()=>{
    setState(students)
  }
  const students=['1','2','3']
  return (
    <>
    <h3>Click Event</h3>
    <h3>{state}</h3>
 
    <button onClick={handler}>Click Me</button>
    </>
   
  )
}