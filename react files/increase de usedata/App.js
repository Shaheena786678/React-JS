import React from 'react';
import { useState } from 'react';
export default function App() {
  const [state, setState]=useState(0)
  const f = () => {
 
      setState(state + 1);
    }
 
 
  const f1 = () =>
     {
      setState(state  -1);
    }
 
 
  return (
    <>
    <div style={{ textAlign: 'center',margin:'300px' }}>
      <button onClick={f1} style={{backgroundColor:'blue', width:'40px',color:'white'}}>-</button>
      <input placeholder={state} style={{textAlign:'center'}} ></input>
      <button onClick={f} style={{backgroundColor:'blue',width:'40px', color:'white'}}>+</button>
    </div>
    </>
  )
}