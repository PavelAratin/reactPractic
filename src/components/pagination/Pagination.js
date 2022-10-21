import './Pagination.css';

const Pagination = ({ page, onClickHandler }) => {
  return (
    <ul className='pagination-list'>
      {[...Array(3)].map((_, i) => (
        <li className='pagination-list__item'>
          <button onClick={() => onClickHandler(i + 1)} className={`pagination-list__button button ${page === i + 1 ? 'button--active' : ''}`}>{i + 1}</button>
        </li>
      ))}
    </ul>

  )
}

export default Pagination;