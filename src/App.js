import "./App.css";
import React, { useEffect, useRef, useState } from "react";
// import GameBoard from "./components/GameBoard/GameBoard";
import ParticlesBackground from "./components/Particles/ParticlesBackground";
// import ScoreBoard from "./components/ScoreBoard/ScoreBoard";
import useInterval from "use-interval";
import presentLogo from "./assests/pinkPresent.png";

const canvasX = 1000;
const canvasY = 1000;
const initialSnake = [
  [4, 10],
  [4, 10],
];
const initialPresent = [14, 10];
const scale = 50;
const timeDelay = 120;

function App() {
  const canvasRef = useRef(null);
  const [snake, setSnake] = useState(initialSnake);
  const [present, setPresent] = useState(initialPresent);
  const [direction, setDirection] = useState([0, -1]);
  const [delay, setDelay] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  useInterval(() => runGame(), delay);

  useEffect(() => {
    let food = document.getElementById("food");
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.setTransform(scale, 0, 0, scale, 0, 0);
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        ctx.fillStyle = "#00d921";
        snake.forEach(([x, y]) => ctx.fillRect(x, y, 1, 1));
        ctx.drawImage(food, present[0], present[1], 1, 1);
      }
    }
  }, [snake, present, gameOver]);

  function handleSetScore() {
    if (score > Number(localStorage.getItem("snakeScore"))) {
      localStorage.setItem("snakeScore", JSON.stringify(score));
    }
  }

  function play() {
    setSnake(initialSnake);
    setPresent(initialPresent);
    setDirection([1, 0]);
    setDelay(timeDelay);
    setScore(0);
    setGameOver(false);
  }

  function checkCollision(head) {
    for (let i = 0; i < head.length; i++) {
      if (head[i] < 0 || head[i] * scale >= canvasX) return true;
    }
    for (const s of snake) {
      if (head[0] === s[0] && head[1] === s[1]) return true;
    }
    return false;
  }

  function presentAte(newSnake) {
    let coord = present.map(() =>
      Math.floor((Math.random() * canvasX) / scale)
    );
    if (newSnake[0][0] === present[0] && newSnake[0][1] === present[1]) {
      let newPresent = coord;
      setScore(score + 1);
      setPresent(newPresent);
      return true;
    }
    return false;
  }

  function runGame() {
    const newSnake = [...snake];
    const newSnakeHead = [
      newSnake[0][0] + direction[0],
      newSnake[0][1] + direction[1],
    ];
    newSnake.unshift(newSnakeHead);
    if (checkCollision(newSnakeHead)) {
      setDelay(null);
      setGameOver(true);
      handleSetScore();
    }
    if (!presentAte(newSnake)) {
      newSnake.pop();
    }
    setSnake(newSnake);
  }

  function changeDirection(e) {
    switch (e.key) {
      case "ArrowLeft":
        setDirection([-1, 0]);
        break;
      case "ArrowUp":
        setDirection([0, -1]);
        break;
      case "ArrowRight":
        setDirection([1, 0]);
        break;
      case "ArrowDown":
        setDirection([0, 1]);
        break;
    }
  }

  return (
    <div onKeyDown={(e) => changeDirection(e)}>
      <img id="food" src={presentLogo} alt="food" width="30vw" />
      <canvas
        className="playArea"
        ref={canvasRef}
        width={`${canvasX}px`}
        height={`${canvasY}px`}
      />
      {gameOver && <div className="gameOver">Game Over</div>}
      <button onClick={play} className="playButton">
        Play
      </button>
      <div className="scoreBox">
        <h2>Score: {score}</h2>
        <h2>High Score: {localStorage.getItem("snakeScore")}</h2>
      </div>
      {/* <ParticlesBackground /> */}
    </div>
  );
}

export default App;
