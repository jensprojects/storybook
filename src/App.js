import "./App.css";
import CharacterPortrait from "./Components/CharacterPortrait";
import Companion from "./Components/Companion";
import MainContent from "./Components/MainContent";
import useToggle from "./hooks/useToggle";
import Desk from "./images/desk5.jpg";

function App() {
  const [menu, toggleMenu] = useToggle(false);

  return (
    <div
      style={{
        backgroundImage: `url(${Desk})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="App"
    >
      <div className="left-container">
        <MainContent />
        <div className="bottom-left">
          <button onClick={toggleMenu} className="dev-utilities">
            Dev
          </button>
          {menu ? <div>I'm developer tools</div> : <></>}
        </div>
      </div>
      <div className="right-container">
        <Companion />
        <CharacterPortrait />
      </div>
    </div>
  );
}
export default App;
