import './ButtonPlus.css';
const ButtonPlus =(props)=>{
  const clickPlusHandler=()=>{
    props.countPlus()
  }
  return(
    <button
    className='button button--plus'
    onClick={clickPlusHandler}
    >+</button>
  )
}

export default ButtonPlus;