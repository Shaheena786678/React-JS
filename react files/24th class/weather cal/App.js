import React, { useState, useEffect } from 'react';
 
export default function App() {
  const [state, setState] = useState(null);
 
  useEffect(() => {
    const apiKey = '5c2915ef0df46c30a18bd1fec401a8b4';
    const city = 'Hyderabad';
 
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setState(data.main.temp);
      })
     
  }, []);
 
  return (
    <>
      <h1>Hyderabad Temperature</h1>
      {state !== null ? <p>{state} °C</p> : <p>Loading...</p>}
    </>
  );
}