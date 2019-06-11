import React from 'react';
import './Button.css';

const ActionButton = (props) => {
  return <button className={`action ${props.buttonStyle}`}>{props.text.toString()}</button>;
};

export default ActionButton;
