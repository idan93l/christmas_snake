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
  const canvasRef = useRef(null);

  const onGameOver = () => {
    setGameState(Game_Over);
  };

  const { snakeBody, onKeyDownHandler, presentPosition, resetGameState } =
    useGameLogic({
      canvasHeight: canvasRef.current?.height,
      canvasWidth: canvasRef.current?.width,
      gameState,
      onGameOver,
    });

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
      <Score>{`CURRENT SCORE: ${(snakeBody.length - 1) * 10}`}</Score>
    </GameWrapper>
  );
};

export default Game;
