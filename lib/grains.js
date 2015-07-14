'use strict';
$(function() {

  function square(num){
    // your code here
  };

  function total(numOfSquares){
    // your code here
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
