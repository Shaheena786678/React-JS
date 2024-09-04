import {useState} from "react"
export default function App1() {
 
  const num=[1,2,3,4,5]
 const [date, setDate]=useState(num)
  return(
    <>
    <h1> City </h1>
    <table border="2px">
     {date.map((val)=>
     <tr> <td >{val}</td></tr>
      )} </table>
    </>
  )
 
}