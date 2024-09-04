import React from "react"
export default function App1() {
 
  const num=['hyd','bjp','banglore','kadapa','pulivendula']
 
  return(
    <>
    <h1> City </h1>
    <table border="2px">
     {num.map((x)=>
     <tr> <td >{x}</td></tr>
      )} </table>
    </>
  )
 
}