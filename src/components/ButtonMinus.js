import './ButtonMinus.css';
const ButtonMinus = (props) => {
  const clickMinusHandler = () => {
    props.countMinus()

  }
  return (
    <button
      className='button button--minus'
      onClick={clickMinusHandler}
    >-</button>
  )
}

export default ButtonMinus;