import React from "react";

export default function CompanionActivation({ setIsCompanionVisible }) {
  return (
    <div className="companion-activation">
      <h1>What a chance!</h1>
      <h2>Bastian wird nun an deiner Seite bleiben.</h2>
      <h2>Klicke den Knopf und er wird aus dem Buch springen.</h2>
      <div className="companion-wrap">
        <button
          onClick={() => setIsCompanionVisible(true)}
          className="companion-button"
        >
          Ich will dir folgen!
        </button>
      </div>
    </div>
  );
}
