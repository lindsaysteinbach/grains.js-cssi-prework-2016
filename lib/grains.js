'use strict';

function square(num){ 
  return Math.pow(2, (num - 1));
};

function total(numOfSquares){
  var nextSquare = numOfSquares + 1;
  var nextSquareGrains = square(nextSquare);
  var totalGrainsSoFar = nextSquareGrains - 1
  return totalGrainsSoFar;
};