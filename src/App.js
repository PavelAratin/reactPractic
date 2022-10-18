
import React, { useState } from 'react';
import './App.css';
import Game from './components/game/Game';
import Result from './components/result/Result';

const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
];

function App() {
  //количество шагов в игре
  const [step, setStep] = useState(0);
  //количество правильных ответов
  const [correct, setCorrect] = useState(0);
  const question = questions[step];

  const onClickVariantHandler = (index) => {
    setStep(step + 1)
    //если выбранный ответ совпадает с правильным ответом в данном массиве,то увеличиваем количество правильных ответов
    if (index === question.correct) {
      setCorrect(correct + 1)
    }
  }

  //если шаг равен длине массива вопросов, то мы игру закончили, показываем результат 
  return (
    <div className='app'>
      {step !== questions.length
        ? (<Game
          question={question}
          questions={questions}
          step={step}
          onClickVariantHandler={onClickVariantHandler}
        ></Game>)
        : (<Result correct={correct} questions={questions}></Result>)}

    </div>
  );
}

export default App;
