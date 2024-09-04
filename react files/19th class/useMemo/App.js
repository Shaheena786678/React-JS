import React, { useState, useMemo } from 'react';
 
export default function App() {
    const [add, setAdd] = useState(0);
    const [sub, setSub] = useState(100);
 
    const z = () => {
     
        setAdd(add + 1);
    };
 
    const z1 = () => {
     
        setSub(sub - 1);
    };
   // const multiply =()=>{
     // console.log('hello')
     // return add*2
    // }
 
    const multiplication=useMemo(function multiply(){
      console.log("hellooo")
      return add*8
 
    },[add])
 
    return (
        <div>
          {multiplication}
          {/* <h2> {multiply()} </h2> */}
            <br/>
            <button onClick={z}>ADD </button> {add}  <br/>
            <button onClick={z1}>Del </button> {sub}
        </div>
    );
}