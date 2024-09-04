import { useState } from 'react'
import './style.css'
export default function App(){
  const person={
    fname:'shahin',
    lname:'pathan',
    age:25
  }
  const[state,setState]=useState(person)
  const update=()=>{
    setState({fname:'sham', lname:'pathan'})
  }
  return (  
    <>
<h3>First name is <span className='txt'>{state.fname}</span> and last name is <span className='txt'>{state.lname}</span> </h3>
<button onClick={update} >update</button>
   </>
  )
}