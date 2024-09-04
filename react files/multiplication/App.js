import React from "react"
export default function App1() {
 
  const num=[1,2,3,4,5]
 
  return(
    <>
    <h1> City </h1>
    <table border="2px">
     {num.map((x)=>
     <tr> <td >{x*2}</td></tr>
      )} </table>
    </>
  )
 
}