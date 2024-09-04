import React from 'react';
import { useState } from 'react';
import './style.css'
export default function App() {
  const person={
    fname:'shahin',
    lname:"pathan",
    age:23
  }
  const[state,setState]=useState(person)
  const update=()=>{
   
    setState({...state,fname:'sham'})
   
   
     
  }
 
  return(
   
  <>
  <h3>First Name is { state.fname } and last name is  { state.lname } </h3>
  <button onClick={update}>Update</button>
  </>
  )
}