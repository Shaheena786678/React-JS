import React, { useState, useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
export default function App29() {
  const [state, setState] = useState([]);
  const [search, setSearch] = useState("");
  const state1 = (e) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=10')
      .then(res => res.json())
      .then(json => setState(json));
  }, []);
 
  return (
    <>
      <div className='container'>
        <div className='row'>
        <input type="text" placeholder="Search" value={search} onChange={state1} />
        <div className='row'>
          {state.filter((item) => item.title.includes(search)).map((item) => (
            <div key={item.id} className='col-md-4'>
              <div className="card">
                <img src={item.image} className="card-img-top" alt={item.title} />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <h4 className='card-title'>{item.price}</h4>
                  <p className="card-text">{item.description}</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </>
)};