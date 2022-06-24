import { useState } from "react";
import "./styles/Quiz.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import NextPageButton from "./NextPageButton";

export default function Quiz({ currentPage, setCurrentPage, quiz }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showAnswerExpl, setShowAnswerExpl] = useState(false);
  const [taskDone, setTaskDone] = useState(false);
  const questions = quiz.content;

  const handleAnswerOptionClick = (answerOption) => {
    const { isCorrect } = answerOption;

    setSelectedAnswer(answerOption);
    setShowAnswerExpl(true);
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setTimeout(() => {
        setCurrentQuestion(nextQuestion);
        setSelectedAnswer(null);
        setShowAnswerExpl(false);
      }, 5000);
    } else {
      setTaskDone(true);
    }
  };

  const getAnswerClass = (answer) => {
    const baseClass = "answbtn";

    if (selectedAnswer) {
      if (answer.isCorrect) {
        return `${baseClass} correct`;
      }

      if (
        selectedAnswer.answer === answer.answer &&
        !selectedAnswer.isCorrect
      ) {
        return `${baseClass} wrong`;
      }
    }

    return baseClass;
  };

  return (
    <>
      <div className="left-page">
        <div className="quizcontainer">
          <h3 id="question">{questions[currentQuestion].question}</h3>
          <img
            className="quizimg"
            src={questions[currentQuestion].img}
            alt=""
          />
          <div id="answer_buttons" className="answbtn_grid">
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <>
                  <button
                    key={answerOption.id}
                    disabled={selectedAnswer}
                    className={getAnswerClass(answerOption)}
                    onClick={() => handleAnswerOptionClick(answerOption)}
                  >
                    {answerOption.answer}
                  </button>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="right-page">
        <div className="score-section">
          <FontAwesomeIcon
            icon={faTrophy}
            size="lg"
            flip="horizontal"
            className="trophy"
          />
          <h2 className="score">
            You scored <strong>{score}</strong> out of{" "}
            <strong>{questions.length}</strong> Points{" "}
          </h2>
        </div>
        {showAnswerExpl ? (
          <div className="explanation_section">
            <h3>Erklärung:</h3>
            <p className="explanation">
              {questions[currentQuestion].explanation}
            </p>
          </div>
        ) : (
          ""
        )}
        {taskDone && <h1 className="quiz-done">Gut gemacht!</h1>}
      </div>
      {taskDone ? (
        <>
          <NextPageButton
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </>
      ) : (
        ""
      )}
    </>
  );
}
