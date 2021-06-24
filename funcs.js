/*1. Is Five
Define a function isFive that will return true if a number is equal to 5 and false if it is not.
*/
function isFive(num) {
  if(num === 5) return true;
  return false;
}

/*2. Is Odd
Write a function isOdd that takes in a number as an argument and returns true if the number is odd and returns false otherwise.
*/
function isOdd(number) {
  if (number instanceof String) throw Error;
  if (number instanceof Object) throw  Error;
  if (number instanceof Array) throw Error;

  //let positive = Math.abs(number)
  //console.log(-1 instanceof Number)
  //if (!(positive instanceof Number)) throw Error;

  if (number % 2 != 0) return true;
  return false;

}

/*3. Array  of the Range
   Write a function myRange(min, max, step) that takes in 3 numbers as
      parameters. The function should ran array of the between and inclusive of
      min and max at step intervals.
*/

function myRange(min, max, step = 1) {
  let result = [];
  for(let i = min; i <= max; i++){
    result.push(i);

  }
  return result;
}


module.exports = { isFive, isOdd, myRange };