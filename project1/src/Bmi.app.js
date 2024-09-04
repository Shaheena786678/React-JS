import React, { useState } from 'react';
import './style.css'; 
import pic from './pics/BMI1.png';
import pic1 from './pics/Bmib.png';

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    if (weight > 0 && height > 0) {
      const heightMeters = height / 100;
      const bmiValue = weight / (heightMeters * heightMeters);
      setBMI(bmiValue);
    } else {
      setBMI(null);
    }
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const getBMICategory = (bmi) => {
    if (bmi < 18.5) {
      return 'Underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
      return 'Normal-weight';
    } else if (bmi >= 25 && bmi < 30) {
      return 'Overweight';
    } else if (bmi >= 30) {
      return 'Obesity';
    } else {
      return '';
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="card-wrapper" style={{ height: "650px", width: "auto" }}>
            <div className="section-A">
              <div className="bmi-container">
                <h1>BMI Calculator</h1>
                <img
                  src={pic1}
                  alt="BMI Categories"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
                <div className="input-group">
                  <label htmlFor="weight">Weight (kg):   </label>
                  <input
                    id="weight"
                    type="number"
                    value={weight}
                    onChange={handleWeightChange}
                    placeholder="Enter weight in kg"
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="height">Height (cm): </label>
                  <input
                    id="height"
                    type="number"
                    value={height}
                    onChange={handleHeightChange}
                    placeholder="Enter height in cm"
                  />
                </div>
                <button className="calculate-button" onClick={calculateBMI}>Calculate BMI</button>
                {bmi !== null && (
                  <div className="result-section">
                    <br /> <br /> <br /> <br />
                    <h2>Your BMI: {bmi.toFixed(2)}</h2>
                    <h2>Category: {getBMICategory(bmi)}</h2>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="col" >
          <div className="card-wrapper" style={{ height: "650px", width: "auto" }}>
            <h1>BMI Categories</h1>
            <img
              src={pic}
              alt="BMI Categories"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
            <ul>
              <li>Underweight: BMI less than 18.5</li>
              <li>Normal weight: BMI 18.5–24.9</li>
              <li>Overweight: BMI 25–29.9</li>
              <li>Obesity: BMI 30 or higher</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BMICalculator;
