import React from "react";
import ReactDOM from 'react-dom/client';
import './style.css'
let dollar = prompt("Enter the dollar amount");
let rupees = dollar * 84.72;
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
 <h2> Dollers={dollar} </h2>
 <h2> Rupees={rupees} </h2>
  </>
) 