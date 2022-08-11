const createSnakeMovements = (gridSize = 40) => ({
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
})

export default createSnakeMovements;