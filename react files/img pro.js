import React from "react";
import ReactDOM from 'react-dom/client';
import pic from './pics/img.jpg'
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
  <h1>insert image</h1>
  <img src={pic} alt="" width="200px"/>
  </>
) 
