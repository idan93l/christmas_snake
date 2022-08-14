// ( 1 ) ---------------------------------------------------------------------------------------------------------
//         (I) - I developed the game as a web app with React, and i used png images and sounds with
//               Christmas vibes that i found on google.
//         (II) Things I would like to add in the future:
//              - The player can decide if the game ends when the snake hit the walls.
//              - The player can change the snake speed.
//              - abillity to get higher points if the modes (like higher speed..) are harder
//              - different "foods" - some of them add more points than the others and some
//                reducing points and even make you lose the game.
//              - Game users with global highscores, so it can be more competitive.
//              - Make the a game a realtime multiplayer game.
//              - Make the game more epic with characters, and a story.
//              - Add more levels with different "geography" and obstacles.
// ( 1 ) ---------------------------------------------------------------------------------------------------------

// ( 2 ) ---------------------------------------------------------------------------------------------------------
//         (a) - In order to get gameWon to be true, the player needs to get more than 4 created elements,
//               and more than 2 destroyed elements, only if the last touched element is the Yellow square.
//         (b) -
//               [Touch sequence 1]: Red square, blue square, wait 1 seconds, green square, red square.
//               [Touch sequence 2]: Red square, blue square, wait 1 seconds, red square, green square.
// ( 2 ) ---------------------------------------------------------------------------------------------------------

// ( 3 ) ---------------------------------------------------------------------------------------------------------

//  Iterative way to reverse a string
const reverseString1 = (string) => {
  let reversedString = "";
  const stringLength = string.length - 1;

  for (let i = stringLength; i >= 0; i--) {
    reversedString += string[i];
  }

  return reversedString;
};

//  Recursive way to reverse a string
const reverseString2 = (string) => {
  return string ? reverseString2(string.substr(1)) + string[0] : string;
};

// ( 3 ) ---------------------------------------------------------------------------------------------------------

// ( 4 ) ---------------------------------------------------------------------------------------------------------

//         (a) - After the first array being generated, sumOfPoints = 1, gameStatus value will be valid.
//             - After the second array being generated, sumOfPoints = 0, gameStatus value will be valid.
//             - After the third array being generated, sumOfPoints has not changed so gameStatus value
//               will be Empty array.

// --------(b)-------------------------------------------------
const matrixFunc = (matrix) => {
  let evenColumnsSum = 0;
  let oddRowsSum = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i % 2 === 0) {
        oddRowsSum += matrix[i][j];
      }
      if (j % 2 !== 0) {
        evenColumnsSum += matrix[i][j];
      }
    }
  }
  return evenColumnsSum > oddRowsSum ? "Valid" : "Not valid";
};
// --------(b)-------------------------------------------------

// --------(c)-------------------------------------------------
// To be honest, I'm not quite sure about that. With the help of the Construct debugger,
// I understood that if the sum of a given array is 0 (not the overall sum of the arrays),
// gameStatus equals to "Empty Array".
// --------(c)-------------------------------------------------

// ( 4 ) ---------------------------------------------------------------------------------------------------------
