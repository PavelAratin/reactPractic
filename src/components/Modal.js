import './Modal.css';

const Modal = (props) => {
  const clickHandler = () => {
    props.clickHandler()
  }
  return (
    <div className={`overlay hidden ${props.modal ? 'open' : ''}`} onClick={clickHandler}>
      <div className='modal'>
        <div className='modal__content'>
          <h1 className='modal__title'>Модальное окно</h1>
        </div>
        <button className='modal__button'>Закрыть</button>
      </div>
    </div>
  )
}

export default Modal;