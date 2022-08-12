import { SEGMENT_SIZE } from "../Canvas/draw";
import { Direction } from "./useGameLogic";

export const createSnakeMovements = (gridSize = 40) => ({
  moveRight: (snakeBody) => {
    const bodyCopy = [...snakeBody];
    const headPos = bodyCopy[bodyCopy.length - 1];
    bodyCopy.shift();
    return [...bodyCopy, { ...headPos, x: headPos.x + gridSize }];
  },
  moveLeft: (snakeBody) => {
    const bodyCopy = [...snakeBody];
    const headPos = bodyCopy[bodyCopy.length - 1];
    bodyCopy.shift();
    return [...bodyCopy, { ...headPos, x: headPos.x - gridSize }];
  },
  moveDown: (snakeBody) => {
    const bodyCopy = [...snakeBody];
    const headPos = bodyCopy[bodyCopy.length - 1];
    bodyCopy.shift();
    return [...bodyCopy, { ...headPos, y: headPos.y + gridSize }];
  },
  moveUp: (snakeBody) => {
    const bodyCopy = [...snakeBody];
    const headPos = bodyCopy[bodyCopy.length - 1];
    bodyCopy.shift();
    return [...bodyCopy, { ...headPos, y: headPos.y - gridSize }];
  },
});

export const willSnakeEatThePresent = ({
  presentPosition,
  snakeHeadPosition,
  direction,
}) => {
  const { Up, Down, Left, Right } = Direction;
  switch (direction) {
    case Up:
      return (
        presentPosition.x === snakeHeadPosition.x &&
        snakeHeadPosition.y - SEGMENT_SIZE === presentPosition.y
      );
    case Down:
      return (
        presentPosition.x === snakeHeadPosition.x &&
        snakeHeadPosition.y + SEGMENT_SIZE === presentPosition.y
      );
    case Left:
      return (
        presentPosition.y === snakeHeadPosition.y &&
        snakeHeadPosition.x - SEGMENT_SIZE === presentPosition.x
      );
    case Right:
      return (
        presentPosition.y === snakeHeadPosition.y &&
        snakeHeadPosition.x + SEGMENT_SIZE === presentPosition.x
      );
  }
};

export const hasSnakeEatenItself = (snakeBody) => {
  if (snakeBody.length <= 1) {
    return false;
  }

  const head = snakeBody[snakeBody.length - 1];
  const body = snakeBody.slice(0, snakeBody.length - 1);

  return body.some(segment => segment.x === head.x && segment.y === head.y)
};
