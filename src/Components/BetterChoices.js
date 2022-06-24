import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import NextPageButton from "./NextPageButton";

export default function BetterChoices({
  choices,
  setCurrentPage,
  currentPage,
}) {
  const [currentChoice, setCurrentChoice] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showAnswerExpl, setShowAnswerExpl] = useState(false);
  const [taskDone, setTaskDone] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleChoiceOptionClick = (options) => {
    const { isCorrect } = options;
    setIsClicked(true);
    setSelectedAnswer(options);
    setShowAnswerExpl(true);
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextChoice = currentChoice + 1;
    if (nextChoice < choices.length) {
      setTimeout(() => {
        setCurrentChoice(nextChoice);
        setSelectedAnswer(null);
        setShowAnswerExpl(false);
        setIsClicked(false);
      }, 2000);
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
        <h1 id="question">Was ist besser?</h1>
        <div className="choice-section">
          {choices[currentChoice].options.map((option) => (
            <img
              key={option.id}
              width="200px"
              height="230px"
              disabled={isClicked}
              className={getAnswerClass(option)}
              onClick={() => {
                if (!isClicked) handleChoiceOptionClick(option);
              }}
              src={option.answer}
              alt={option.answer}
            />
          ))}
        </div>
      </div>
      <div className="right-page">
        <div className="score-section">
          <FontAwesomeIcon icon={faTrophy} size="lg" flip="horizontal" />
          <h2 className="score">
            Du hast <strong>{score}</strong> von{" "}
            <strong>{choices.length}</strong> Punkten
          </h2>
        </div>
        {showAnswerExpl ? (
          <>
            <h3>Erklärung:</h3>
            <p>{choices[currentChoice].explanation}</p>
            <img src={choices[currentChoice].img} alt="" />
          </>
        ) : (
          <></>
        )}
        {taskDone && <h1 className="quiz-done">Gut gemacht!</h1>}
      </div>
      {taskDone ? (
        <NextPageButton
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      ) : (
        ""
      )}
    </>
  );
}
