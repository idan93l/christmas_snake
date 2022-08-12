import { useState, useRef } from "react";
import Canvas from "../Canvas/Canvas";
import draw from "../Canvas/draw";
import { GameWrapper, Score } from "./Game.style";
import useGameLogic from "./useGameLogic";

export const GameState = {
  Running: "Running",
  Game_Over: "Game_Over",
  Paused: "Paused",
};

const Game = () => {
  const { Running, Game_Over, Paused } = GameState;
  const [gameState, setGameState] = useState(Running);
  const [score, setScore] = useState(0);
  const canvasRef = useRef(null);

  const handleSetScore = () => {
    if (score > Number(localStorage.getItem("snakeScore"))) {
      localStorage.setItem("snakeScore", JSON.stringify(score));
    }
  };

  const onGameOver = () => {
    handleSetScore();
    setScore(0)
    setGameState(Game_Over);
  };


  const { snakeBody, onKeyDownHandler, presentPosition, resetGameState } =
    useGameLogic({
      canvasHeight: canvasRef.current?.height,
      canvasWidth: canvasRef.current?.width,
      gameState,
      onGameOver,
      score,
      setScore,
      handleSetScore,
    });
  console.log(score);

  const drawGame = (ctx) => {
    draw({ ctx, snakeBody, presentPosition });
  };

  return (
    <GameWrapper tabIndex={0} onKeyDown={onKeyDownHandler}>
      <Canvas ref={canvasRef} draw={drawGame} />
      {gameState === Game_Over ? (
        <button
          onClick={() => {
            setGameState(Running);
            resetGameState();
          }}
        >
          PLAY AGAIN
        </button>
      ) : (
        <button
          onClick={() => {
            setGameState(gameState === Running ? Paused : Running);
          }}
        >
          {gameState === Running ? "PAUSE" : "PLAY"}
        </button>
      )}
      <Score>{`SCORE: ${score}`}</Score>
      <Score>{`HIGHSCORE: ${
        !localStorage.getItem("snakeScore")
          ? 0
          : localStorage.getItem("snakeScore")
      }`}</Score>
    </GameWrapper>
  );
};

export default Game;
