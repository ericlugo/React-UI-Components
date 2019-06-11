import React from 'react';
import NumberButton from './NumberButton';
import ActionButton from './ActionButton';
import './Button.css';

const NumberPad = (props) => {
  const keys = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const keysText = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  for (let i in keys) {
    if (i === 0) keys[i] = <ActionButton text={i} buttonStyle={`${keysText[i]}`} />;
    else keys[i] = <NumberButton text={i} buttonStyle={`${keysText[i]}`} />;
  }
  return keys;
};

export default NumberPad;
