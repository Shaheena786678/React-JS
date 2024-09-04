import React from "react";
import ReactDOM from 'react-dom/client';
let message
let obj=new Date()
let day=obj.getDay()
if(day==1)
  {
    message="monday"
  }
 else if(day==2)
  {
    message=" tuesday"
  }
 else if(day==3)
  {
    message=" wednesday"
  }
 else if(day==4)
  {
    message=" thursday"
  }
  else if(day==5)
  {
    message="friday"
  }
 else if(day==6)
  {
 message="saturday"
  }
  else
  {
    message="sunday"
  }
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
  <h2>Today is</h2>
<h2>{message}</h2>
  </>
)