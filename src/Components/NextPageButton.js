import React from "react";

export default function NextPageButton({ setCurrentPage, currentPage }) {
  return (
    <button
      className="nextPage-button"
      onClick={() => setCurrentPage(currentPage + 1)}
    >
      Nächste Seite
    </button>
  );
}
