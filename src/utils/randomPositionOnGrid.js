export const randomPositionOnGrid = ({ gridSize = 40, threshold }) =>
  Math.floor(Math.random() * (threshold / gridSize)) * gridSize;