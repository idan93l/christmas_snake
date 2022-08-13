import { useState, useEffect } from "react";
import "./App.css";
import Game from "./components/Game/Game";
import ParticlesBackground from "./components/Particles/ParticlesBackground";
import presentLogo from "./assests/greenPresent.png";
import snake from "./assests/snake.png"
import Rotate from "./components/Rotate/Rotate"

function App() {
  const [orientation, setOrientation] = useState(window.screen.orientation.type);

  useEffect(() => {
    const handleOrientationChange = () =>
      setOrientation(window.screen.orientation.type);
    window.addEventListener("orientationchange", handleOrientationChange);
    return () =>
      window.removeEventListener("orientationchange", handleOrientationChange);
  }, []);

  console.log(orientation);

  return (
    <>
      <img id="present" src={presentLogo} alt="present" width="30vw" />
      <img id="snake" src={snake} alt="snake" width="30vw" />
      {
        orientation === "landscape-primary" ? <Rotate /> : <Game />
      }
      <ParticlesBackground />
    </>
  );
}

export default App;
