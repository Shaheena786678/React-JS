import React, { useState } from "react";
import "./style.css";
import pic from './pics/teddy1.jpg'
 
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
      <button className="button" onClick={update}>Update</button>
    </>
  );
};
 
export default App;