import React, { useState, useEffect } from 'react';
import './App.css';
import ButtonMinus from './components/ButtonMinus';
import ButtonPlus from './components/ButtonPlus';
import StopCounter from './components/StopCounter';

function App() {
  const [count, setCount] = useState(0)
  const [display, setDisplay] = useState(false)

  const countPlus = () => {
    setCount(count + 1)
  }

  const countMinus = () => {
    setCount(count - 1)
  }
  useEffect(() => {
    if (count < 0) {
      setDisplay(true)
    } else {
      setDisplay(false)
    }
  }, [count])
  return (
    <div className='app'>
      <div className='app__container'>
        <h1 className='app__title'>Счетчик</h1>
        <p className='app__counter'>{count}</p>
        <div className='app__buttons'>
          <ButtonMinus countMinus={countMinus}></ButtonMinus>
          <ButtonPlus countPlus={countPlus}></ButtonPlus>
        </div>
        {display && <StopCounter></StopCounter>}
      </div>
    </div>
  );
}

export default App;
