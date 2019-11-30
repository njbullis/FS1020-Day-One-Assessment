/**
 * Separate all "numbers" from 5 upwards into "bigNumbers"
 * All other "numbers" should go in "smallNumbers"
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
 * @see https://javascript.info/ifelse#the-if-statement
 */
'Use Strict';

let allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let bigNumbers = [5, 6, 7, 8, 9];
let smallNumbers = [1, 2, 3, 4];
allNumbers = [smallNumbers, bigNumbers]

allNumbers.forEach(function (a) {
  // This function runs for each value in the `allNumbers` array
    if ((a > 4)){

        return bigNumbers;
    }
    else if ((a < 5)) {

        return smallNumbers;
    }
});

console.log('bigNumbers:', bigNumbers); // [5, 6, 7, 8, 9]
console.log('smallNumbers:', smallNumbers); // [1, 2, 3, 4]


/**
 * Calculate the sum of "numbers" greater than 7 using a forEach loop
 */
let unfilteredNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let filteredSum = 0;

unfilteredNumbers.forEach(function (a) {

 let unfilteredNumbers = (8 + 9);
    

 filteredSum = unfilteredNumbers;

   return filteredSum;


})


console.log('filteredSum', filteredSum); // 17


