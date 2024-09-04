import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Data from './info.json';
const w={
    width:'286px',
    height:'200px'
}
 
export default function BootstrapCard() {
  return (
    <div className="container">
      <div className="row">
        {Data.map((x) => (
 
          <div className="col-md-4" >
            <div className="card" style={{ width: '18rem' }}>
              <img src={x.pic} className="card-img-top" alt='' style={w} />
              <div className="card-body">
                <h5 className="card-title text-center">{x.city}</h5>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
 
  );
}