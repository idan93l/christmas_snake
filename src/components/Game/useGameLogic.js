import useInterval from "use-interval";
import { useState } from "react";
import createSnakeMovements from "./movements";

const Direction = {
  Up: "Up",
  Down: "Down",
  Left: "Left",
  Right: "Right",
};

const MOVEMENT_SPEED = 100;

const useGameLogic = () => {
  const [direction, setDirection] = useState();
  const [snakeBody, setSnakeBody] = useState([{ x: 0, y: 0 }]);
  const { Up, Down, Left, Right } = Direction;
  const { moveUp, moveDown, moveLeft, moveRight } = createSnakeMovements();

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
    console.log(e.code);
  };

  const moveSnake = () => {
    let snakeBodyAfterMovement;
    switch (direction) {
      case Up:
        snakeBodyAfterMovement = moveUp(snakeBody);
        break;
      case Down:
        snakeBodyAfterMovement = moveDown(snakeBody);
        break;
      case Left:
        snakeBodyAfterMovement = moveLeft(snakeBody);
        break;
      case Right:
        snakeBodyAfterMovement = moveRight(snakeBody);
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
