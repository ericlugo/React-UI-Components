import React from 'react';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberPad from './components/ButtonComponents/NumberPad';
import FunctionPad from './components/ButtonComponents/FunctionPad';

import './App.css';

const App = () => {
  return (
    <div className='container'>
      <div className='calculator'>
        <CalculatorDisplay text='0' />
        <div className='keypad'>
          <ActionButton text='clear' buttonStyle='clear' />
          <NumberPad />
          <FunctionPad />
        </div>
      </div>
    </div>
  );
};

export default App;
