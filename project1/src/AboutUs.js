import React from 'react';
import pic from '../src/pics/log.jpg'
import pic1 from '../src/pics/Anil 1.jpg'
const AboutUs = () => {
  return (
    <div className='body'>
    <div className="about-us">
      <div className="about-header">
        <img
          src={pic} 
          alt="Company Logo"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
        <h2>About Us</h2>
      </div>
      <h3>Anil Yerramreddy</h3>
     <h3> Founder and Global CEO</h3>
      <img
          src={pic1} 
          alt="Company Logo"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      <p>
      As the CEO, Anil is responsible for MOURI Tech’s strategy, company goals, 
      focus on technology, leadership development, comprehensive services, 
      and market expansion
       
      </p>
      <p>
      Established in 2005, MOURI Tech has evolved into a trusted Global Enterprise 
      Solutions Provider for customers from various industries. We have a highly 
      skilled and experienced talent poolof professionals delivering consistent
      service excellence to customers, globally.
      </p>
      
    </div>
    </div>
  );
};

export default AboutUs;
