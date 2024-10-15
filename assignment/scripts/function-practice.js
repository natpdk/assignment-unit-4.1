console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'

function helloName(name) {
  return 'Hello, ' + name +'!';
}
console.log( helloName('Nat') );

// Remember to call the function to test


// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  let answer = firstNumber + secondNumber;
  return answer
  // return firstNumber + secondNumber;
}
console.log('The sum is: ', addNumbers(5, 2));
console.log('The sum is: ', addNumbers(134579, 345678));

// 4. Function to multiply three numbers & return the result
function multiplyThree(num0, num1, num2) {
  let answer = num0 * num1 * num2
  return answer;
}
console.log( 'The answer is: ', multiplyThree(2, 7, 4))
console.log( 'The answer is: ', multiplyThree(126, 677, 514))

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  }
  if (number <= 0){
    return false;
  }
}
console.log('Is the number positive? ', isPositive(17));
console.log('Is the number positive? ', isPositive(-43));

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast(array) {
  return array[array.length-1];
}
console.log( 'Last item in array is: ', getLast([1, 2, 3]) );
console.log( 'Last item in array is: ', getLast(['Hi', 'Hello', 'Hey']) );

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
console.log('Is this value here? ', find(8, [2, 4, 6, 8]))
console.log('Is this value here? ', find(8, [1, 3, 5, 7]))

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  return string.charAt(0) === letter;
}
console.log( 'Is this the first letter?', isFirstLetter('A', 'Apple'))
console.log( 'Is this the first letter?', isFirstLetter('A', 'Orange'))

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  // TODO: return the sum
  return sum;
}
console.log( 'The sume of the array is: ', sumAll([10, 15, 20, 25]))
console.log( 'The sume of the array is: ', sumAll([1, 5, 2, 2]))

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive(array) {
  return array.filter(num =>{
    if(num>0){
      return num;
    }
  })
}
console.log( "New Array: ", allPositive([2, -3, 4, -5, 6, -7]))

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

//Here is the question I picked: https://edabit.com/challenge/fBJyQSe5Jmbm9hPAG
//Given an n-sided regular polygon n, return the total sum of internal angles (in degrees).
function internalAngles(n){
  let sum = (n - 2) * 180
  return sum;
}
console.log('The sum of the internal angles of the polygon is: ', internalAngles(8));
console.log('The sum of the internal angles of the polygon is: ', internalAngles(3));

// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
