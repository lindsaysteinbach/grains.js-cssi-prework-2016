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

// ###########################
// DO NOT EDIT BELOW THIS LINE
// ###########################

$(function() {

  $( "#target" ).submit(function( event ) {
    event.preventDefault();
    var input = parseInt($("#in").val());
    //alert( "Handler for .submit() called. with input " + square(input) );
    $('#square-result').text(square(input));
    $('#total-result').text(total(input));
  });
});
