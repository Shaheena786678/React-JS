import React from "react"
import { useState} from "react"
import pic from './pics/teddy1.jpg'
export default function App(){
const[state,setState]=useState("hello")
const handler=(e)=>{
  setState(e.target.value)
}
  return(
<>
<h1>Controlled component</h1>
     <img width={state}src={pic} alt="" ></img>
      <h1>YOU SELECTED  <span style={{ color: 'red' }}> {state}</span></h1>
     <select onChange={handler}  >
       <option >200px</option>
        <option>300px</option>
        <option>400px</option>
        <option>500px</option>
        <option>600px</option>
      </select>

</>
  )
}