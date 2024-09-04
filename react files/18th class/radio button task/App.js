import React,{ useState } from 'react'
export default function App() {
  const [state,setState]=useState()
const handle=(e)=>{
  setState(e.target.value)
 }
  return (
  <div>
    <h1>Select pizza size</h1>
 <form onChange={handle}>
 Regular<input type='radio' name='pizza' value="Regular"></input>
 Medium<input type='radio' name='pizza' value="Medium"></input>
 Large<input type='radio' name='pizza' value="Large"></input>
 <h1>select topping <span>  {state}</span></h1>
</form>
  </div>
  )
}