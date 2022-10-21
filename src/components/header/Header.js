import './Header.css';
const Header = ({ value, onChangeHandler, cats, categoryId, onClickHandler }) => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__inner'>
          <h1 className='header__title'>Коллекция фотографий</h1>
          <div className='header__wrapper'>
            <ul className='header__list'>
              {cats.map((cat, index) => {
                return (
                  <li key={cat.name} className='header__items'>
                    <button onClick={() => onClickHandler(index)} className={`header__button button ${categoryId === index ? "button--active" : ''}`}>{cat.name}</button>
                  </li>
                )
              })}
              {/* <li className='header__items'>
                <button className='header__button button'>Все</button>
              </li>
              <li className='header__items'>
                <button className='header__button button button--active'>Горы</button>
              </li>
              <li className='header__items'>
                <button className='header__button button'>Море</button>
              </li>
              <li className='header__items'>
                <button className='header__button button'>Архитектура</button>
              </li> */}
              <li className='header__items'>
                <button className='header__button button'>Город</button>
              </li>
            </ul>
            <input value={value} onChange={(e) => onChangeHandler(e.target.value)} className='header__input' placeholder='Поиск'></input>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header;