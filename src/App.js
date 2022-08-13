import "./App.css";
import Game from "./components/Game/Game";
import ParticlesBackground from "./components/Particles/ParticlesBackground";
import presentLogo from "./assests/greenPresent.png";
import snake from "./assests/snake.png"

function App() {
  return (
    <>
      <img id="present" src={presentLogo} alt="present" width="30vw" />
      <img id="snake" src={snake} alt="snake" width="30vw" />
      <Game />
      <ParticlesBackground />
    </>
  );
}

export default App;
