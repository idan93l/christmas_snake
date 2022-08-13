import { useState, useRef } from "react";
import Canvas from "../Canvas/Canvas";
import draw from "../Canvas/draw";
import { GameWrapper, MiddleWrapper, PlayButton } from "./Game.style";
import { Score, ScoreWrapper } from "./Score.style";
import useGameLogic from "./useGameLogic";
import {
  NavButton,
  NavButtonsWrapper,
  NavButtonsInnerWrapper,
} from "../NavigationButton/NavButton.style";
import {
  TbArrowBigDown,
  TbArrowBigLeft,
  TbArrowBigRight,
  TbArrowBigTop,
} from "react-icons/tb";

export const GameState = {
  Start: "Start",
  Running: "Running",
  Game_Over: "Game_Over",
  Paused: "Paused",
};

const Game = ({ player }) => {
  const { Start, Running, Game_Over, Paused } = GameState;
  const [gameState, setGameState] = useState(Start);
  const [score, setScore] = useState(0);
  const canvasRef = useRef(null);

  console.log(gameState);

  const handleSetScore = () => {
    if (score > Number(localStorage.getItem("snakeScore"))) {
      localStorage.setItem("snakeScore", JSON.stringify(score));
    }
  };

  const onGameOver = () => {
    handleSetScore();
    setScore(0);
    setGameState(Game_Over);
  };

  const {
    snakeBody,
    onKeyDownHandler,
    presentPosition,
    resetGameState,
    handleUp,
    handleDown,
    handleLeft,
    handleRight,
  } = useGameLogic({
    canvasHeight: canvasRef.current?.height,
    canvasWidth: canvasRef.current?.width,
    gameState,
    onGameOver,
    score,
    setScore,
    handleSetScore,
  });

  const drawGame = (ctx) => {
    draw({ ctx, snakeBody, presentPosition });
  };

  return (
    <>
      <GameWrapper tabIndex={0} onKeyDown={onKeyDownHandler}>
        <Canvas ref={canvasRef} draw={drawGame} />
        <MiddleWrapper>
          {gameState === Game_Over ? (
            <PlayButton
              onClick={() => {
                setGameState(Running);
                resetGameState();
                handleRight();
              }}
            >
              PLAY AGAIN
            </PlayButton>
          ) : (
            <PlayButton
              onClick={() => {
                if (gameState === Start) {
                  setGameState(Running);
                  handleRight();
                } else {
                  setGameState(gameState === Running ? Paused : Running);
                }
              }}
            >
              {gameState === Start
                ? "START"
                : gameState === Running
                ? "PAUSE"
                : "PLAY"}
            </PlayButton>
          )}
          <ScoreWrapper>
            <Score>{`SCORE:${score}`}</Score>
            <Score>{`HIGHSCORE:${
              !localStorage.getItem("snakeScore")
                ? 0
                : localStorage.getItem("snakeScore")
            }`}</Score>
          </ScoreWrapper>
        </MiddleWrapper>
        <NavButtonsWrapper>
          <NavButton onClick={handleUp}>
            <TbArrowBigTop />
          </NavButton>
          <hr />
          <NavButtonsInnerWrapper>
            <NavButton onClick={handleLeft}>
              <TbArrowBigLeft />
            </NavButton>
            <NavButton onClick={handleRight}>
              <TbArrowBigRight />
            </NavButton>
          </NavButtonsInnerWrapper>
          <hr />
          <NavButton onClick={handleDown}>
            <TbArrowBigDown />
          </NavButton>
        </NavButtonsWrapper>
      </GameWrapper>
    </>
  );
};

export default Game;
