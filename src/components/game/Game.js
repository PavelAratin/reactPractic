import React from "react";
import './Game.css';

function Game(props) {
  const onClickHandler = (index) => {
    props.onClickVariantHandler(index)
  }
  //расчет процентов для прогрессбара(зависти от массива questions)
  const percent = Math.round((props.step / props.questions.length) * 100);
  return (
    <React.Fragment>
      <div className="progress">
        <div style={{ width: `${percent}%` }} className="progress__inner"></div>
      </div>
      <h1>{props.question.title}</h1>
      <ul>
        {props.question.variants.map((text, index) => {
          return <li
            key={text}
            onClick={() => onClickHandler(index)}
          >{text}</li>
        })}
      </ul>
    </React.Fragment>
  );
}

export default Game;