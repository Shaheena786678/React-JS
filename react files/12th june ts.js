import React, { useState } from "react";
import "./style.css";
const App = () => {
  const [style, setStyle] = useState("date");
 
  const update = () => {
   
     setStyle("update");
  };
  return (
    <div className="App">
     
      <h3 className={style}>
        hello shannu
 
      </h3>
      <button className="button" onClick={update}
      >
        Click me</button>
    </div>
  );
};
export default App;