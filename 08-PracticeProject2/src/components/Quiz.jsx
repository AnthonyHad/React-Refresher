import { useState, useCallback } from "react";

import QUESTIONS from "../questions.js";
import QuestionTimer from "./QuestionTimer.jsx";
import quizCompleteImg from "../assets/quiz-complete.png";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  // Derived State from answers
  const activeQuestionIndex = userAnswers.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prevAnswers) => [...prevAnswers, selectedAnswer]);
  },
  []);

  const handleSkipAnswer = useCallback(() => {
    handleSelectAnswer(null);
  }, [handleSelectAnswer]);

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="Quiz Complete" />
        <h2>Congratulations! You have completed the quiz.</h2>
      </div>
    );
  }

  const shuffeledAnswers = [...QUESTIONS[activeQuestionIndex].answers].sort(
    (a, b) => Math.random() - 0.5
  );

  return (
    <div id="quiz">
      <div id="question">
        {/* Key lets us unmount and remount the QuestionTimer component when the active question changes. */}
        <QuestionTimer
          key={activeQuestionIndex}
          timeout={10000}
          onTimeout={() => handleSkipAnswer(null)}
        />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffeledAnswers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
