import React from "react";
import ReactDOM from 'react-dom/client';
import './style.css'

let weight=prompt("enter weight")
let height=prompt("enter height in meters")
let h1=height*height
let bmi=weight/h1
let message
if(bmi<=18.5)
  {
      message="underweight"
  }
  else if(bmi>=18.5 && bmi<=25)
  {
      message="Normal"
  }
  else if(bmi>=25 && bmi<=30)
  {
      message="Overweight"
  }
  else
  {
      message="Obesity"
  }
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
   <h2> weight is: {weight} </h2>
   <h2> height is:  {height} </h2>
   <h2> bmi is: {bmi} </h2>
   <h2> {message} </h2>
   
  </>
)