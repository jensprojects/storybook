import kidsparkplace from "../Images/kidsparkplace.png";
import kidswater from "../Images/kidswater.png";
import illplastic from "../Images/illplastic.png";
import "./styles/Intro.css";
import NextPageButton from "./NextPageButton";

export default function Intro({ currentPage, setCurrentPage }) {
  return (
    <>
      <div className="left-page">
        <h1>Hi du!</h1>
        <h2> Hast du Lust, dich mit uns auf ein Abenteuer zu begeben?</h2>
        <img src={kidsparkplace} width="400px" alt="" />
      </div>
      <div className="right-page intro-right">
        <h1>"Hey, komm rüber", ruft Timmy</h1>
        <img src={kidswater} width="200px" alt="" />
        <p>
          Heute wirst du Timmy, Lea und ihre Freunde auf ihrer Geschichte
          begleiten und tolle Sachen erleben
        </p>
        <h3>Lasst uns anfangen!</h3>
        <div className="introframe">
          <img src={illplastic} width="200px" alt="" />
        </div>
      </div>
      <NextPageButton
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}

// checked
