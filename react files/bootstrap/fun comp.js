import React from "react";
import ReactDOM from 'react-dom/client';
//components
function Comp(){
  return<h3>helloo</h3>
}
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
 <h3>main app</h3>
 <Comp/>
 </>
)