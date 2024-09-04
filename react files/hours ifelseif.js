import React from "react";
import ReactDOM from 'react-dom/client';
//import './style.css'
const obj=new Date()
const time=obj.getHours() 
const style={}
var message
if(time<12)
  {
    message="good morning"
    style.color="green"
  }else if(time>=12 && time<=17){
    message="good ofternoon"
    style.color="red"
  }else {
    message="good evening"
    style.color="blue"
  }
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
 <h2>{time}</h2>
   <h2 style={style}> {message} </h2>
   
  </>
)