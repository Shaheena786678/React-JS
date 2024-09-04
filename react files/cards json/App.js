import React from 'react';
import { useState } from 'react';
import Data from './info.json'
const w={
  width:'300px'
}
export default function App() {
  const [state, setState]=useState(Data)
  return(
 <>
 {state.map((x)=>
    <>
 <div className='container-fluid'>
 
 
<div className='row'>
<div className='col-md-4'>
<div class="card">
  <img src={x.pic} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title" align="center">HYDERBAD</h5>
  </div>
</div>
</div>
<div className='col-md-4'>
<div class="card">
  <img src={x.pic1} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title" align="center">PULIVENDULA</h5>
  </div>
</div>
</div>
<div className='col-md-4'>
<div class="card">
  <img src={x.pic2} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title" align="center">KADAPA</h5>
  </div>
</div>
</div>
</div>
 
 
<div className='row'>
<div className='col-md-4'>
<div class="card">
  <img src={x.pic3} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title" align="center"> KASHMIR </h5>
  </div>
</div>
</div>
<div className='col-md-4'>
<div class="card">
  <img src={x.pic4} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title" align="center"> GOA </h5>
  </div>
</div>
</div>
<div className='col-md-4'>
<div class="card">
  <img src={x.pic5} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title" align="center"> DELHI </h5>
  </div>
</div>
</div>
</div>
 
 
 
 </div>
 
   
 </>
    ) }
</>)
}