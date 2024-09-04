import React, { useState } from "react";
import "./style.css";
import pic from './pics/teddy1.jpg'
import pic1 from './pics/teddy1.jpg'
const App = () => {
  const [rotate, setRotate] = useState();
 
  const update = () => {
    setRotate(!rotate);
  };
 
  return (
    <>
      <img
        src={pic}
        alt=""
        style={{ transform: rotate ? "rotate(0deg)" : "rotate(180deg)" }}
      />   


       <br></br>  
      <button className="button" onClick={update}>clock</button>
    </>
  );
};
 
export default App;