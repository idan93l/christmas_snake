import "./App.css";
import Game from "./components/Game/Game";
import ParticlesBackground from "./components/Particles/ParticlesBackground";
import presentLogo from "./assests/pinkPresent.png";
import snake from "./assests/snake.png"

function App() {
  return (
    <div>
      <img id="present" src={presentLogo} alt="present" width="30vw" />
      <img id="snake" src={snake} alt="snake" width="30vw" />
      <Game />
      <ParticlesBackground />
    </div>
  );
}

export default App;
