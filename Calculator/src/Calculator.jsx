// src/Calculator.js

import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [display, setDisplay] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setDisplay(eval(display)); // Note: Using eval is not recommended for production code
      } catch (error) {
        setDisplay('Error');
      }
    } else if (value === 'C') {
      setDisplay('');
    } else {
      setDisplay(display + value);
    }
  };

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'C'
  ];

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        {buttons.map((button, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(button)}
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
