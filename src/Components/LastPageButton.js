import React from "react";

export default function LastPageButton({ setCurrentPage, currentPage }) {
  return (
    <button
      className="lastPage-button"
      onClick={() => setCurrentPage(currentPage - 1)}
    >
      Zurück
    </button>
  );
}
