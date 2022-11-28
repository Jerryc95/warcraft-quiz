import React, { useState } from 'react';
import './App.css';

function App() {
  const questions = [
    {
      questionText: "What is the name of the first great Human Kingdom?",
      answerOptions: [
        { answerText: "Stormwind", isCorrect: false },
        { answerText: "Arathor", isCorrect: true },
        { answerText: "Lordaeron", isCorrect: false },
        { answerText: "Gilneas", isCorrect: false }
      ]
    },
    {
      questionText: "What does the Darnassian word Kaldorei mean?",
      answerOptions: [
        { answerText: "Children of the moon", isCorrect: false },
        { answerText: "Children of the night", isCorrect: false },
        { answerText: "Children of the stars", isCorrect: true },
        { answerText: "Children of the dark", isCorrect: false }
      ]
    },
    {
      questionText: "Who is Ysera's daughter?",
      answerOptions: [
        { answerText: "Merithra", isCorrect: true },
        { answerText: "Ysondre", isCorrect: false },
        { answerText: "Linisera", isCorrect: false },
        { answerText: "Verdisa", isCorrect: false }
      ]
    },
    {
      questionText: "What is the name of the Goblin capital?",
      answerOptions: [
        { answerText: "Gadgetzan", isCorrect: false },
        { answerText: "Booty Bay", isCorrect: false },
        { answerText: "Mudsprocket", isCorrect: false },
        { answerText: "Undermine", isCorrect: true }
      ]
    },
    {
      questionText: "Who is the name of the Council that leads the Forsaken?",
      answerOptions: [
        { answerText: "Forsaken Council", isCorrect: false },
        { answerText: "Desolate Council", isCorrect: true },
        { answerText: "Undercity Council", isCorrect: false },
        { answerText: "Dark Council", isCorrect: false }
      ]
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if(isCorrect===true) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if(nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true)
    }
  }

  const handleRestartQuizClick = () => {
    setScore(0)
    setCurrentQuestion(0)
    setShowScore(false)
  }

  return (
    <div className='app'>
    {
    showScore ? (
      <div>
        <div className='score-section'>You scored {score} out of {questions.length}</div>         
        <button onClick= {handleRestartQuizClick}> Play again!</button>
      </div>
    ) : (
      <>
        <div className='question-section'>
          <div className='question-count'>
            <span>Question {currentQuestion + 1}</span>/{questions.length}
          </div>
          <div className='question-text'>{questions[currentQuestion].questionText}</div>
        </div>
        <div className='answer-section'>
          {questions[currentQuestion].answerOptions.map((answerOptions) => (
            <button onClick={ () => { handleAnswerButtonClick(answerOptions.isCorrect) }}>
              {answerOptions.answerText}
            </button>
          ))}
        </div>
      </>
    )}
  </div>
  );
}

export default App;
