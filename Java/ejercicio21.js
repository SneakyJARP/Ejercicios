//Use the destructuring, instead of a temporary variable, to swap the values of the variables.

let num1 = 10;
let num2 = 20;
console.log('Before swap: ', num1, num2); 

let temp = num2;
num2 = num1;
num1 = temp;

console.log('After swap: ', num1, num2); 