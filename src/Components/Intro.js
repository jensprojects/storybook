import kidsparkplace from "../Images/kidsparkplace.png";
import kidswater from "../Images/kidswater.png";
import illplastic from "../Images/illplastic.png";
import "./styles/Intro.css";
import NextPageButton from "./NextPageButton";

export default function Intro({ currentPage, setCurrentPage }) {
  return (
    <>
      <div className="left-page intro-left">
        <h1>Hi du!</h1>
        <h2> Hast du Lust, dich mit uns auf ein Abenteuer zu begeben?</h2>
        <img src={kidsparkplace} width="400px" alt="" />
      </div>
      <div className="right-page intro-right">
        <h1>"Hahaha, fang mich", sagt Timmy</h1>
        <img src={kidswater} width="300px" alt="" />
        <p>
          Spielst du gerne mit deinen Freunden? Das tun Timmy und Lea auch.
          Heute begleitest du sie und ihre Freunde bei ihrem Abenteuer und
          erfährst, welchen Herausforderungen sie sich stellen müssen, während
          du die Geschichte verfolgst, Quizfragen beantwortest und Spiele
          spielst. <br></br>
          <br></br>
        </p>
        <h2>Lasst uns anfangen!</h2>
        <div className="introframe">
          <img src={illplastic} width="200px" alt="" />
        </div>
      </div>
      <NextPageButton />
    </>
  );
}

// checked
