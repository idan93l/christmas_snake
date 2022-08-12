export const SEGMENT_SIZE = 40;

const draw = ({ ctx, snakeBody, presentPosition }) => {
  let present = document.getElementById("present");
  let snake = document.getElementById("snake");
  // console.log(snakeBody);
  if(presentPosition) {
    ctx.drawImage(present, presentPosition?.x, presentPosition?.y, SEGMENT_SIZE, SEGMENT_SIZE);
  }

  // ctx.fillStyle = `#00d921`;
  snakeBody.forEach((segment) => {
    // ctx.fillRect(segment.x, segment.y, SEGMENT_SIZE, SEGMENT_SIZE);
    ctx.drawImage(snake, segment.x, segment.y, SEGMENT_SIZE, SEGMENT_SIZE);
  });
};

export default draw;
