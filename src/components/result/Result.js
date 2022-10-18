import './Result.css';
const Result = (props) => {
  return (
    <div className="result">
      <img className="result__img" src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2 className="result__title">Вы отгадали {props.correct} ответа из {props.questions.length}</h2>
      <a href='/'>
        <button className="result__button">Попробовать снова</button>
      </a>
    </div>
  )
}
export default Result;