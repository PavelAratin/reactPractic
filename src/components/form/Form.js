import './Form.css';
const Form = ({ onChangeSearchValue,searchValue }) => {
  return (
    <form className='users__form'>
      <input value={searchValue} onChange={onChangeSearchValue} className='users__input' type='search' placeholder='Найти пользователя'></input>
    </form>
  )
}
export default Form;