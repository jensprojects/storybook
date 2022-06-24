import "./styles/Start.css";
import Wave from "react-wavify";

export default function Intro({ setIsStarted }) {
  const onClick = () => {
    setIsStarted(true);
  };

  return (
    <div className="wrapper">
      <div className="starting">
        <h1>Bist du bereit für ein Abenteuer?</h1>

        <button className="startbutton" onClick={onClick}>
          Start
        </button>
      </div>
      <Wave mask="url(#mask)" fill="#1277b0">
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="0" stopColor="white" />
            <stop offset="0.5" stopColor="black" />
          </linearGradient>
          <mask id="mask">
            <rect x="0" y="0" width="2000" height="200" fill="url(#gradient)" />
          </mask>
        </defs>
      </Wave>
    </div>
  );
}

// checked
