import React from "react";
import ReactDOM from 'react-dom/client';
let message
if(4<5){
  //alert("4 is less than 5")
  message="4 is less than 5"
}else{
  //alery("4 is not less than 5")
  message="4 is not less than 5"
}
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
  <h1>if else</h1>
<h2>{message}</h2>
  </>
)