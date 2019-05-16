import React from 'react';
import './Button.css';

const NumberButton = (props) => {
  return <button className={`number ${props.buttonStyle}`}>{props.text.toString()}</button>;
};

export default NumberButton;
