import React from 'react';
import './Display.css';

const CalculatorDisplay = (props) => {
  return (
    <div className='calculator-display'>
      <p className='display-output'>{props.text.toString()}</p>
    </div>
  );
};

export default CalculatorDisplay;
