const SEGMENT_SIZE = 40;

const draw = ({ ctx, snakeBody }) => {
  console.log(snakeBody);
  ctx.fillStyle = `#00d921`;
  snakeBody.forEach((segment) => {
    ctx.fillRect(segment.x, segment.y, SEGMENT_SIZE, SEGMENT_SIZE);
  });
};

export default draw;
