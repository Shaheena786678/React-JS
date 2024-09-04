import React from "react";
import ReactDOM from 'react-dom/client';
const obj=new Date()
const h=obj.getHours()
const root=ReactDOM.createRoot(document.getElementById)
root.render(
  <>
  {Date()}
  <h2>{h}</h2>
  </>
)