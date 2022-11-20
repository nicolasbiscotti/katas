'use strict';

function fizzbuzz(number) {
  let output = ""; 
  
  if (number % 3 === 0) {
    output += "Fizz";
  }  
  if (number % 5 === 0) {
    output += "Buzz";
  }  
  if (!output) {
    output = number.toString();
  }
  
  return output;
}

module.exports = fizzbuzz;
