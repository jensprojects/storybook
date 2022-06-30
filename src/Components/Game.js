import ParkGame from "./games/ParkGame/components/ParkGame";
import { RecoilRoot } from "recoil";
import NextPageButton from "./NextPageButton";
import LastPageButton from "./LastPageButton";

export default function Game({ name, currentPage, setCurrentPage }) {
  return (
    <>
      <div className="game-screen">
        <RecoilRoot>{name === "ParkGame" && <ParkGame />}</RecoilRoot>

        {name === "Whack-a-bottle" && (
          <iframe
            className="game-frame"
            src="https://jensprojects.github.io/whackabottle/"
            title="whackabottlegame"
            scrolling="no"
          ></iframe>
        )}
      </div>
      <LastPageButton
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <NextPageButton
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}
