import React from 'react'
//import './style.css'
import pic1 from './pics/gymm.jpg'
export default function Comp2() {
  return (<>
    <div className='container'>

    <div className='row'>
    <div className='col-md-6'>
      <h1 className='m-3 p-2'>WORKOUTS MADE <br/>
       <span style={{color:'blue'}} >EXCLUSIVE</span> FOR YOU!</h1>
     <p className='m-3 p-2'>Welcome to Steel, where our story is not just about fitness,<br/> but about forging 
      a legacy in personal training and wellness. Established in 2015 our journey began 
      with a singular vision: to create a fitness experience that goes beyond the conventional
     
      </p>
      <button  style={{backgroundColor:'green', color:'white', borderRadius:'3px', margin:'30px', padding:'10px', width:'120px'}}>Start now</button>
                   
     </div>
    <div className='col-md-6 p-4'>
      <img src={pic1} alt=""/>
      </div>
      </div>
      </div>
      <div className='footer'>
        <h5 align='center'> send as a message @shannu.css</h5>
      </div>
      </>
  )
}