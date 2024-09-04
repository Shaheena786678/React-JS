import ReactDOM from 'react-dom/client';
import './style.css';
import Comp1 from './Comp1';
import Comp2 from './Comp2';
import Comp3 from './Comp3';
import Comp4 from './Comp4';
import Comp5 from './Comp5';
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="container">
    <div className="banner">
      <Comp1 />
    </div>
    <div className="navbar">
      <Comp2 />
    </div>
    <div className="content">
      <div className="comp3">
        <Comp3 />
      </div>
      <div className="comp4">
        <Comp4 />
      </div>
    </div>
    <div className="footer">
      <Comp5 />
    </div>
  </div>
);