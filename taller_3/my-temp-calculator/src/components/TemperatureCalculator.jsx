// src/components/TemperatureCalculator.jsx
import React, { useState } from 'react';

const TemperatureCalculator = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');
  const [message, setMessage] = useState('');

  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);
    const fahrenheitValue = (value * 9) / 5 + 32;
    setFahrenheit(fahrenheitValue.toFixed(2));
    checkBoilingPoint(value);
  };

  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value);
    const celsiusValue = ((value - 32) * 5) / 9;
    setCelsius(celsiusValue.toFixed(2));
    checkBoilingPoint(celsiusValue);
  };

  const checkBoilingPoint = (temp) => {
    if (temp >= 100) {
      setMessage('The water would boil.');
    } else {
      setMessage('The water would not boil.');
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Calculador de temperatura</h1>
      <div>
        <label>Temperatura en Celsius:</label>
        <input
          type="number"
          value={celsius}
          onChange={handleCelsiusChange}
        />
      </div>
      <div>
        <label>Temperatura en Fahrenheit:</label>
        <input
          type="number"
          value={fahrenheit}
          onChange={handleFahrenheitChange}
        />
      </div>
      <p>{message}</p>
    </div>
  );
};

export default TemperatureCalculator;
