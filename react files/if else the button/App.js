import React,{useState} from 'react'
import './style.css'
 const person={
  fname:'apsia'
}
export default function App() {
  const [state,setstate]=useState(person)
  function b(){
   if(state.fname=='shahin'){
    setstate({fname:'sham'})}
    else{
      setstate({fname:'sunia'})}
    }
   
  return (  
  <>
     <h2>First Name is <span className='txt'>{state.fname}</span></h2>
    <button onClick={b}>update</button>
  </>
  )
}