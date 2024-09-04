import React, { useEffect, useState } from "react";
export default function App(){
const [state,setState]=useState([])
useEffect(()=>{
  fetch('https://fakestoreapi.com/products')
  .then(res=>res.json())
 // .then(json=>console.log(json))
 .then(json=>setState(json))
}
)

  return (
    <>
      <h2>hellooo</h2>
      {state.map((item)=><li>{item.title}</li>)}
    </>
  )
}