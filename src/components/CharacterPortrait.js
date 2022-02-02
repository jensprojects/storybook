import { characters } from "../Data/Characters";

export default function CharacterPortrait({ selectedChar }) {
  const selectedCharInfo = characters.find(({ id }) => selectedChar === id);
  console.log(selectedCharInfo);
  return (
    <div className="character-portrait">
      <img alt={selectedCharInfo?.name} src={selectedCharInfo?.img} />
    </div>
  );
}
