import React from "react";
import ReactDOM from 'react-dom/client';
import pic from './pics/img.jpg'
import './style.css'
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
  <h1 className="txt">External CSS</h1>
  <h1>hai</h1>
  <h1>hello</h1>
  <h1>bye</h1>
  <img src={pic} alt="" width="200px"/>
  <br/>
  <img src="logo192.png" alt=""/>
  </>
)