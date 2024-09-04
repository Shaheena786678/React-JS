import pic from './pics/banner1.jpg'
import './style.css';
 
function Comp1() {
  return (
    <div className="banner">
      <img src={pic} className="banner" alt="" />
    </div>
  );
}
 
export default Comp1;