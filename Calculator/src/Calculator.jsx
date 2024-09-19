// src/Calculator.js

import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [display, setDisplay] = useState('');
const handleButtonClick = () => {
  if(value === ''){
    try{
      setDisplay(eval(display));
    }catch(error){
      setDisplay(error)
    }
  }else if(value === 'C'){
    setDisplay('');
  }else{
    setDisplay(display + value);
  }
}
  

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'C'
  ];

  return (
    <div>
      <div>
        {display}
        <div>
          {buttons.map((button, index) => (
            <button key={index } onClick={() => handleButtonClick(button)}>
              {button}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
