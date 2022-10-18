import { click } from '@testing-library/user-event/dist/click';
import React, { useState } from 'react';
import './App.css';
import Modal from './components/Modal';
//если скрывать/показывать модальное окно по уловному редерингу то анимацию сделать не получиться
//что бы показать модальное окно с анимацией, то нужно манипулировать классами

function App() {
  const [modal, setModal] = useState(false)
  const clickHandler = () => {
    setModal(!modal)
  }
  return (
    <div className='app'>
      <button
        className='app__btn'
        onClick={clickHandler}
      >Открыть окно</button>
     <Modal
     modal={modal}
     clickHandler={clickHandler}
     ></Modal>
    </div>
  );
}

export default App;
