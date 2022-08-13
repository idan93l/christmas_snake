export const SEGMENT_SIZE = 40;

const draw = ({ ctx, snakeBody, presentPosition }) => {
  let present = document.getElementById("present");
  let snake = document.getElementById("snake");

  if(presentPosition) {
    ctx.drawImage(present, presentPosition?.x, presentPosition?.y, SEGMENT_SIZE, SEGMENT_SIZE);
  }

  snakeBody.forEach((segment) => {
    ctx.drawImage(snake, segment.x, segment.y, SEGMENT_SIZE, SEGMENT_SIZE);
  });
};

export default draw;
