import React from "react";
import ReactDOM from 'react-dom/client';
import pic from './pics/teddy1.jpg'
import pic1 from './pics/ban.jpg'
import pic2 from './pics/bb.jpg'
import pic3 from './pics/cc.jpg'
import pics from './pics/log.png'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap'
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
 <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  <img src={pics} alt="" className="img-fluid"/>
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>


<div className="container col-mod-12">
<div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
          <img src={pic1} alt=""/>
          </div>
          <div className="carousel-item">
          <img src={pic2} alt=""/>
          </div>
          <div className="carousel-item">
          <img src={pic3} alt="" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </div>

      
<div className="container">
    <div className="row">
        <div className="col-md-4">
<div className="card" >
<img src={pic} alt="" className="img-fluid"/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      
    </div>
  </div>
</div>
 
    <div className="col-md-4">
<div className="card" >
<img src={pic} alt="" className="img-fluid"/>
<div className="card-body">
  <h5 className="card-title">Card title</h5>
  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  
</div>
</div>
</div>
 
    <div className="col-md-4">
<div className="card">
<img src={pic} alt="" className="img-fluid"/>
<div className="card-body">
  <h5 className="card-title">Card title</h5>
  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  
</div>
</div>
</div>
 </div>
</div>

<div class="row bg-primary col-mod-12">
  <h2>GOOD WIBES</h2>
</div>
 </>
)