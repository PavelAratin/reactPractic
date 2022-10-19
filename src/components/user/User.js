import './User.css';
const User = ({ email, ava, name, onClickInvite, isInvited, id }) => {
  return (
    <li className='users__item'>
      <img className='users__img' src={ava} alt='mask'></img>
      <div className='users__info'>
        <p className='users__name'>{name}</p>
        <p className='users__email'>{email}</p>
      </div>
      <button onClick={() => onClickInvite(id)} className='users__add'>{isInvited ? "-" : "+"}</button>
    </li>
  )
}
export default User;