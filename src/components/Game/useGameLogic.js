import useInterval from "use-interval";
import { useEffect, useState } from "react";
import {
  createSnakeMovements,
  hasSnakeEatenItself,
  willSnakeEatThePresent,
} from "./movements";
import { SEGMENT_SIZE } from "../Canvas/draw";
import { randomPositionOnGrid } from "../../utils/randomPositionOnGrid";
import { GameState } from "./Game";

export const Direction = {
  Up: "Up",
  Down: "Down",
  Left: "Left",
  Right: "Right",
};

const MOVEMENT_SPEED = 100;

const useGameLogic = ({
  canvasHeight,
  canvasWidth,
  gameState,
  onGameOver,
  score,
  setScore,
  handleSetScore,
}) => {
  const [direction, setDirection] = useState();
  const [snakeBody, setSnakeBody] = useState([{ x: 280, y: 440 }]);
  const [presentPosition, setPresentPosition] = useState();
  // const [presentPosition, setPresentPosition] = useState([{ x: 440, y: 440 }]);
  const { Up, Down, Left, Right } = Direction;
  const { Running, Game_Over, Paused } = GameState;
  const { moveUp, moveDown, moveLeft, moveRight } = createSnakeMovements();
  const snakeHeadPosition = snakeBody[snakeBody.length - 1];

  const resetGameState = () => {
    setDirection(undefined);
    setPresentPosition({
      x: randomPositionOnGrid({
        gridSize: SEGMENT_SIZE,
        threshold: canvasWidth,
      }),
      y: randomPositionOnGrid({
        gridSize: SEGMENT_SIZE,
        threshold: canvasHeight,
      }),
    });
    setSnakeBody([{ x: 280, y: 440 }]);
  };

  // console.log(canvasHeight, canvasWidth);
  useEffect(() => {
    if (!canvasHeight || !canvasWidth) {
      return;
    }
    setPresentPosition({
      x: randomPositionOnGrid({
        gridSize: SEGMENT_SIZE,
        threshold: canvasWidth,
      }),
      y: randomPositionOnGrid({
        gridSize: SEGMENT_SIZE,
        threshold: canvasHeight,
      }),
    });

    // setSnakeBody([
    //   {
    //     x: randomPositionOnGrid({
    //       gridSize: SEGMENT_SIZE,
    //       threshold: canvasWidth,
    //     }),
    //     y: randomPositionOnGrid({
    //       gridSize: SEGMENT_SIZE,
    //       threshold: canvasHeight,
    //     }),
    //   },
    // ]);
  }, [canvasHeight, canvasWidth]);

  const onKeyDownHandler = (e) => {
    switch (e.code) {
      case "ArrowUp":
        if (direction !== Direction.Down) {
          setDirection(Up);
        }
        break;
      case "ArrowDown":
        if (direction !== Direction.Up) {
          setDirection(Down);
        }
        break;
      case "ArrowLeft":
        if (direction !== Direction.Right) {
          setDirection(Left);
        }
        break;
      case "ArrowRight":
        if (direction !== Direction.Left) {
          setDirection(Right);
        }
        break;
    }
    // console.log(e.code);
  };

  const moveSnake = () => {
    let snakeBodyAfterMovement;
    switch (direction) {
      case Up:
        if (snakeHeadPosition.y > 0) {
          snakeBodyAfterMovement = moveUp(snakeBody);
        } else if (canvasWidth && snakeHeadPosition.x > canvasWidth / 2) {
          setDirection(Left);
        } else {
          setDirection(Right);
        }
        break;
      case Down:
        if (canvasHeight && snakeHeadPosition.y < canvasHeight - SEGMENT_SIZE) {
          snakeBodyAfterMovement = moveDown(snakeBody);
        } else if (canvasWidth && snakeHeadPosition.x > canvasWidth / 2) {
          setDirection(Left);
        } else {
          setDirection(Right);
        }
        break;
      case Left:
        if (snakeHeadPosition.x > 0) {
          snakeBodyAfterMovement = moveLeft(snakeBody);
        } else if (canvasHeight && snakeHeadPosition.y < canvasHeight / 2) {
          setDirection(Down);
        } else {
          setDirection(Up);
        }
        break;
      case Right:
        if (canvasWidth && snakeHeadPosition.x < canvasWidth - SEGMENT_SIZE) {
          snakeBodyAfterMovement = moveRight(snakeBody);
        } else if (canvasHeight && snakeHeadPosition.y < canvasHeight / 2) {
          setDirection(Down);
        } else {
          setDirection(Up);
        }
        break;
    }

    // snake eats itself
    if (snakeBodyAfterMovement) {
      const isGameOver = hasSnakeEatenItself(snakeBodyAfterMovement);
      if (isGameOver) {
        onGameOver();
      }
    }

    if (
      direction !== undefined &&
      presentPosition &&
      willSnakeEatThePresent({ presentPosition, snakeHeadPosition, direction })
    ) {
      setSnakeBody([
        ...snakeBodyAfterMovement,
        { x: presentPosition.x, y: presentPosition.y },
      ]);
      setPresentPosition({
        x: randomPositionOnGrid({
          threshold: canvasWidth,
        }),
        y: randomPositionOnGrid({ threshold: canvasHeight }),
      });
      setScore(score + 10);
      handleSetScore();
    } else if (snakeBodyAfterMovement) {
      setSnakeBody(snakeBodyAfterMovement);
    }
  };

  useInterval(moveSnake, gameState === Running ? MOVEMENT_SPEED : null);

  return { snakeBody, onKeyDownHandler, presentPosition, resetGameState };
};

export default useGameLogic;