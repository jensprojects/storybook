import "./styles/CharacterSelection.css";
import { characters } from "../Data/Characters";
import CharacterChoice from "./CharacterChoice";
import { Card, ListGroup } from "react-bootstrap";
import { v4 } from "uuid";
import NextPageButton from "./NextPageButton";

export default function CharacterSelection({
  selectChar,
  selectedChar,
  currentPage,
  setCurrentPage,
}) {
  const clickCharacter = (id) => {
    selectChar(id);
  };

  return (
    <>
      <div className="left-page">
        <div className="characterContainer selection-left">
          <div className="charhead">
            <h2>Wen willst du auf dem Abenteuer begleiten?</h2>
          </div>
          <div className="charboxes">
            {characters.map((character) => (
              <Card border="primary" key={character.id}>
                <Card.Header as="h3" style={{ background: character.color }}>
                  {character.name}
                </Card.Header>
                <Card.Img
                  key={character.id}
                  variant="top"
                  src={character.img}
                  className={`charbox ${
                    selectedChar === character.id ? "chosenCard" : ""
                  }`}
                  onClick={() => clickCharacter(character.id)}
                  id={character.id}
                />

                <Card.Body>
                  <Card.Title style={{ background: character.color }}>
                    Was ich mag:
                  </Card.Title>
                  <ListGroup variant="flush">
                    <ListGroup.Item key={character.id}>
                      <ul
                        style={{ border: `solid 4px ${character.color}` }}
                        className="selection-list"
                      >
                        {character.characteristics.map((characteristic) => (
                          <li key={v4()}>{characteristic}</li>
                        ))}
                      </ul>
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
        <h3>Klicke auf einen Charakter</h3>
      </div>
      <div className="right-page selection-right">
        <div className="">
          <h2>Du wählst:</h2>
          {<CharacterChoice selectedChar={selectedChar} />}
        </div>
      </div>
      {selectedChar && (
        <NextPageButton
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </>
  );
}
