import React from "react";
import confetti from "../Images/confetti.png";
import happykids from "../Images/happykids.png";

export default function Restart({
  setCurrentPage,
  setSelectedChar,
  setIsCompanionVisible,
  setIsStarted,
}) {
  const onRestart = () => {
    setCurrentPage(0);
    setSelectedChar(null);
    setIsCompanionVisible(false);
    setIsStarted(false);
  };

  return (
    <>
      <div className="left-page">
        <img className="imgconfetti" src={confetti} alt="" />
        <h1>Juhuuuu!</h1>
        <h2>Du hast das Abenteuer beendet!</h2>
      </div>
      <div className="right-page">
        <div className="restart">
          <h2 className="restart-right">
            Fang gerne noch einmal von vorne an. <br />
            <br />
          </h2>
          <img src={happykids} alt="" />
        </div>
        <button className="nextPage-button" onClick={onRestart}>
          Neustart
        </button>
      </div>
    </>
  );
}
