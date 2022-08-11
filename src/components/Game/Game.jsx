import React from "react";
import { useRef } from "react";
import Canvas from "../Canvas/Canvas";
import draw from "../Canvas/draw";
import { GameWrapper } from "./Game.style";
import useGameLogic from "./useGameLogic";

const Game = () => {
  const canvasRef = useRef(null);

  const { snakeBody, onKeyDownHandler } = useGameLogic();

  const drawGame = (ctx) => {
    draw({ ctx, snakeBody });
  };

  return (
    <GameWrapper tabIndex={0} onKeyDown={onKeyDownHandler}>
      <Canvas ref={canvasRef} draw={drawGame} />
    </GameWrapper>
  );
};

export default Game;
