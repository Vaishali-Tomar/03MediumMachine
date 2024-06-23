// src/TrafficLight.js
import React, { useState, useEffect } from 'react';
import './TrafficLight.css';

const TrafficLight = () => {
  const [light, setLight] = useState('red');

  useEffect(() => {
    let timer;
    switch (light) {
      case 'red':
        timer = setTimeout(() => setLight('green'), 4000); // 4 seconds
        break;
      case 'green':
        timer = setTimeout(() => setLight('yellow'), 3000); // 3 seconds
        break;
      case 'yellow':
        timer = setTimeout(() => setLight('red'), 2000); // 2 seconds
        break;
      default:
        break;
    }
    return () => clearTimeout(timer);
  }, [light]);

  return (
    <div className="traffic-light">
      <div className={`light red ${light === 'red' ? 'active' : ''}`}></div>
      <div className={`light yellow ${light === 'yellow' ? 'active' : ''}`}></div>
      <div className={`light green ${light === 'green' ? 'active' : ''}`}></div>
    </div>
  );
};

export default TrafficLight;
