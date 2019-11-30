/**
 * Declare the variables "a" and "b" to be two numbers
 * "a" should be 8
 * "b" should be 3
 * "a" should always be on the left side of an equation
 *
 * 1. Add them together in a variable named "sum"
 * 2. Subtract them in a variable named "difference"
 * 3. Multiply them in a variable named "product"
 * 4. Divide them in a variable named "quotient"
 */
'Use Strict';

// Define "a" below

a = 8;

// Define "b" below

b = 3;

let sum = a + b;
console.log('sum:', sum); // 11

let difference = a - b;
console.log('difference:', difference); // 5

let product = a * b;
console.log('product:', product); // 24

let quotient = a / b;

console.log('quotient:', quotient); // 2.66 (etc)

console.log('\n===\n'); // Ignore this line, makes the program output more readable


/**
 * Reassign the "x" and "y" variables before each console.log() to make each print the boolean true
 */

let x = 0;
let y = 1;

x = 1;

console.log('x === y:', x === y);
x = 1;
y = 0;

console.log('x > y', x > y);

x = -1;
y = x;

console.log('x === -1 && y === x:', x === -1 && y === x);

x = 25;
y = 24;

console.log('x > 0 && y === 24:', x > 0 && y === 24);

y = 23;

console.log('!(y === 24):', !(y === 24));

x = 5;
y = 10;

console.log('x * 2 === y', x * 2 === y);
