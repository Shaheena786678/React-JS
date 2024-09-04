import React, { useEffect, useState } from 'react'
 export default function App() {
  const[state,setstate]=useState([])
  useEffect(()=>{
    fetch('https://randomuser.me/api/?results=10')
   .then(res=>res.json())
  //.then(json=>console.log(json))
  .then(json=>setstate(json.results))
             
 
   },[])
 
  return (
    <>
    {state.map((x)=><li>{x.name.last}</li>)}
     
    </>
  )
}