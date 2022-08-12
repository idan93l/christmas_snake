import useInterval from "use-interval";
import { useState } from "react";
import createSnakeMovements from "./movements";
import { SEGMENT_SIZE } from "../Canvas/draw";

const Direction = {
  Up: "Up",
  Down: "Down",
  Left: "Left",
  Right: "Right",
};

const MOVEMENT_SPEED = 100;

const useGameLogic = ({ canvasHeight, canvasWidth }) => {
  const [direction, setDirection] = useState();
  const [snakeBody, setSnakeBody] = useState([{ x: 0, y: 0 }]);
  const { Up, Down, Left, Right } = Direction;
  const { moveUp, moveDown, moveLeft, moveRight } = createSnakeMovements();
  const snakeHeadPosition = snakeBody[snakeBody.length - 1];

  console.log(canvasHeight, canvasWidth);

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
    const { x, y } = snakeHeadPosition;
    let snakeBodyAfterMovement;
    switch (direction) {
      case Up:
        if (y > 0) {
          snakeBodyAfterMovement = moveUp(snakeBody);
        } else if (canvasWidth && x > canvasWidth / 2) {
          setDirection(Left);
        } else {
          setDirection(Right);
        }
        break;
      case Down:
        if (canvasHeight && y < canvasHeight - SEGMENT_SIZE) {
          snakeBodyAfterMovement = moveDown(snakeBody);
        } else if (canvasWidth && x > canvasWidth / 2) {
          setDirection(Left);
        } else {
          setDirection(Right);
        }
        break;
      case Left:
        if (x > 0) {
          snakeBodyAfterMovement = moveLeft(snakeBody);
        } else if (canvasHeight && y < canvasHeight / 2) {
          setDirection(Down);
        } else {
          setDirection(Up);
        }
        break;
      case Right:
        if (canvasWidth && x < canvasWidth - SEGMENT_SIZE) {
          snakeBodyAfterMovement = moveRight(snakeBody);
        } else if (canvasHeight && y < canvasHeight / 2) {
          setDirection(Down);
        } else {
          setDirection(Up);
        }
        break;
    }
    if (snakeBodyAfterMovement) {
      setSnakeBody(snakeBodyAfterMovement);
    }
  };

  useInterval(moveSnake, MOVEMENT_SPEED);

  return { snakeBody, onKeyDownHandler };
};

export default useGameLogic;
