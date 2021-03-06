import { useState } from "react";
import { v4 } from "uuid";
import { TIMMY_TEXT, LEA_TEXT, COMPANION_NAME } from "../Data/constants";
import "./styles/Chapter.css";
import CompanionActivation from "./CompanionActivation";

// determines the number of items shown per slide
const PAGE_SIZE = 4;

export default function Chapter({
  chapter,
  currentPage,
  setCurrentPage,
  selectedChar,
  setIsCompanionVisible,
}) {
  const [currentChapterPage, setCurrentChapterPage] = useState(1);
  const numberOfItems = chapter.content.length;
  const numberOfPages = Math.ceil(numberOfItems / PAGE_SIZE);

  const firstDataIndex = (currentChapterPage - 1) * PAGE_SIZE;
  const lastDataIndex = firstDataIndex + PAGE_SIZE;

  const slideData = chapter.content.slice(firstDataIndex, lastDataIndex);

  const leftPageData =
    slideData.length > PAGE_SIZE / 2
      ? slideData.slice(0, PAGE_SIZE / 2)
      : slideData;
  const rightPageData = slideData.slice(PAGE_SIZE / 2);

  const onPageForward = () => {
    if (currentChapterPage === numberOfPages) {
      setCurrentChapterPage(1);
      setCurrentPage(currentPage + 1);
      return;
    }
    setCurrentChapterPage(currentChapterPage + 1);
  };

  /* const onPageBack = () => {
    if (currentChapterPage === numberOfPages) {
      setCurrentChapterPage(2);
      setCurrentPage(currentPage - 1);
      return;
    }
    setCurrentChapterPage(currentChapterPage - 1);
  };*/

  const formatText = (text) => {
    const character = selectedChar - 1 ? TIMMY_TEXT : LEA_TEXT;

    const formatedText = text
      .replaceAll("<character>", character["<character>"])
      .replaceAll("<Er/Sie>", character["<Er/Sie>"])
      .replaceAll("<er/sie>", character["<er/sie>"])
      .replaceAll("<Sein/Ihr>", character["<Sein/Ihr>"])
      .replaceAll("<sein/ihr>", character["<sein/ihr>"])
      .replaceAll("<seine/ihre>", character["<seine/ihre>"])
      .replaceAll("<seiner/ihrer>", character["<seiner/ihrer>"])
      .replaceAll("<seinem/ihrem>", character["<seinem/ihrem>"])
      .replaceAll("<seinen/ihren>", character["<seinen/ihren>"])
      .replaceAll("<Ihn/Ihr>", character["<Ihn/Ihr>"])
      .replaceAll("<ihn/ihr>", character["<ihn/ihr>"])
      .replaceAll("<ihm/ihr>", character["<ihm/ihr>"])
      .replaceAll("<ihn/sie>", character["<ihn/sie>"])
      .replaceAll("<companion>", COMPANION_NAME);

    return formatedText;
  };

  return (
    <>
      <div className="left-page chapter-left">
        <h2 className="chapter-title">{`Kapitel ${chapter.chapter_number}: ${chapter.title}`}</h2>
        {leftPageData.map((leftData) => {
          if (leftData.type === "paragraph") {
            const formatedText = formatText(leftData.text);
            return <p key={v4()}>{formatedText}</p>;
          }

          if (leftData.type === "image") {
            return (
              <img key={v4()} src={leftData.image} alt={leftData.image}></img>
            );
          }
        })}
      </div>
      <div className="right-page chapter-right">
        {rightPageData.map((rightData) => {
          if (rightData.type === "paragraph") {
            const formatedText = formatText(rightData.text);

            return <p key={v4()}>{formatedText}</p>;
          }

          if (rightData.type === "image") {
            return (
              <img key={v4()} src={rightData.image} alt={rightData.image}></img>
            );
          }

          if (rightData.type === "trigger") {
            return (
              <CompanionActivation
                key={v4()}
                setIsCompanionVisible={setIsCompanionVisible}
              />
            );
          }
        })}
      </div>
      <button className="nextPage-button" onClick={onPageForward}>
        N??chste Seite
      </button>
    </>
  );
}
