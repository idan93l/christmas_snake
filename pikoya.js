// ( 1 ) ---------------------------------------------------------------------------------------------------------
//         (a) - In order to get gameWon to be true, the player needs to get more than 4 created elements,
//               and more than 2 destroyed elemnts, only if the last touched element is the Yellow square.
//         (b) -
//               [Touch sequence 1]: Red square, blue square, wait 1 seconds, green square, red square.
//               [Touch sequence 2]: Red square, blue square, wait 1 seconds, red square, green square.
// ( 1 ) ---------------------------------------------------------------------------------------------------------

// ( 2 ) ---------------------------------------------------------------------------------------------------------

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

// ( 2 ) ---------------------------------------------------------------------------------------------------------

// ( 3 ) ---------------------------------------------------------------------------------------------------------

//         (a) - After the first array being generated, sumOfPoints = 1, gameStatus value will be valid.
//             - After the second array being generated, sumOfPoints = 0, gameStatus value will be valid.
//             - After the third array being generated, sumOfPoints has not changed so gameStatus value
//               will be Empty array.

// --------(b)-----------

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

// --------(b)-----------

// ( 3 ) ---------------------------------------------------------------------------------------------------------
