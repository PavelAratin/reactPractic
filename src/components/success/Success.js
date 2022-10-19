import './Success.css';
const Success = ({ onClickSendInvites,count }) => {
  const onClickHandler = () => {
    onClickSendInvites();
  }
  return (
    <div className='success'>
      <img className='success__img' src='/img/success.svg' alt='success'></img>
      <h2 className='success__title'>Успешно!</h2>
      <p className='success__text'>Всем пользователям {count}  отправлено приглашение</p>
      <button onClick={onClickHandler} className='success__button'>Назад</button>
    </div>
  )
}
export default Success;