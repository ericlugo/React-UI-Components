import React from 'react';
import NumberButton from './NumberButton';
import './Button.css';

const FunctionPad = () => {
  return [
    <NumberButton buttonStyle='function div' text='&divide;' />,
    <NumberButton buttonStyle='function mult' text='&times;' />,
    <NumberButton buttonStyle='function sub' text='&minus;' />,
    <NumberButton buttonStyle='function add' text='&#43;' />,
    <NumberButton buttonStyle='function equal' text='&#61;' />,
  ];
};

export default FunctionPad;
