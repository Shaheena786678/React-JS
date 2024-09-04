import React, { useState } from 'react';
import axios from 'axios';
export default function App() {
    const [city, setCity] = useState('');
    const [Data, setData] = useState([]);
    const fetchData = () => {
        axios.get(vari)
            .then(res => {
                setData(res.data.main);
            })
    };
    const vari="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=8abfa938412e65de8ee0fd05936189b1"
    const state1 = (event) => {
        setCity(event.target.value);
    };
    return (
        <div>
            <h1>Weather</h1>
            {Data.temp-273.15} deg
            <br/>
            <input type="text"  onChange={state1} placeholder="Enter city name" />
            <br />
            <button onClick={fetchData}>Submit</button>
        </div>
    );
}