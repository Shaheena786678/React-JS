import React from "react";
import ReactDOM from 'react-dom/client';
let message
let marks=prompt("enter your marks")
if(marks<=35){
  //alert("4 is less than 5")
  message="you failed..."
}else{
  //alery("4 is not less than 5")
  message="you passed..."
}
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
  <h2>if else</h2>
<h2>{message}</h2>
  </>
)