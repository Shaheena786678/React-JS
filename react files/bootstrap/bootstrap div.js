import React from "react";
import ReactDOM from 'react-dom/client';
import pic from './pics/teddy1.jpg'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
 <div className="container-fluid">
 <div class="row">
 <div className="bg-secondary col-md-6">
 <h2 className="text-danger"> Bootstrap </h2>
 <button className="btn btn-success"> click </button>  </div>
 
 <div className="bg-warning col-md-6">
  <p> Some quick example text to build on the card title and make up the bulk of the card's content </p></div>  </div>  
 
  <div class="row">
<div className="bg-success col-md-4">
  <h2> SHANNU </h2>
  <p> Some quick example text to build on the card title and make up the bulk of the card's content</p>
</div>
 
<div className="bg-primary col-md-4">
  <h2> SHANNU </h2>
  <p> Some quick example text to build on the card title and make up the bulk of the card's contentx </p>
</div>
 
<div className="bg-secondary col-md-4">
 <img src={pic} alt="" className="img-fluid"/>  </div> </div>
 
 <div class="row">
 <div className="footer col-md-12 bg-warning">
   <h4> GOOD WIBES </h4>
 </div> </div>
 
 </div>
  </>
)