import "./App.css";
import Game from "./components/Game/Game";
import ParticlesBackground from "./components/Particles/ParticlesBackground";
import presentLogo from "./assests/greenPresent.png";
import snake from "./assests/snake.png";
import Loader from "./components/Loader/Loader";
import PlayerProvider from "./components/PlayerProvider/PlayerProvider";

function App() {
  return (
    <div>
      <img id="present" src={presentLogo} alt="present" width="30vw" />
      <img id="snake" src={snake} alt="snake" width="30vw" />
      {/* <PlayerProvider>
        {({ player }) => {
          // !player ? <Loader /> : <Game player={player} />;
          <Game player={player} />;
        }}
      </PlayerProvider> */}
      <Game />
      <ParticlesBackground />
    </div>
  );
}

export default App;
