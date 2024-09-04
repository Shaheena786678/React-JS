import React from "react"
export default function App1() {
 
  const num=[0,1,2,3,4,5,6,7,8,9]
 
  return(
    <>
    <h1> MAP </h1>
    <select>
    {num.map((x)=>
      <option value={x}>{x}</option>
      )} </select>
    </>
  )
 
}