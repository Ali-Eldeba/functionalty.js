// Math
/**
 * get average between two numbers
 * 
 * @param {number} number1 
 * @param {number} number2 
 * @returns {number}
 */
function getMid(number1, number2) {
  return Math.floor((number1 + number2) / 2)
}

// Arrays

/**
 * Filter an array depending on the given value
 * 
 * @param {any[]} array
 * @param {any} value
 * @returns 
 */
function filterArray(array, value) {
  return array.filter(e => e != value);
}

/**
 * Get sum of all numbers in array
 * 
 * @param {number[]} array array of numbers
 * @returns {number} sum of all numbers in array
 */
function sumOfArray(array) {
  return array.reduce((a, b) => a + b, 0);
}

/**
 * Sort an array of numbers in ascending order
 * 
 * @param {number[]} array array of numbers
 */
function ascending(array) {
  array.sort(function(a, b) {return a - b;});
}

/**
 * Sort an array of numbers in descending order
 * 
 * @param {number[]} array array of numbers
 */
function descending(array) {
  array.sort(function(a, b) {return a - b;}).reverse();
}

/**
 * Get minimum value in array
 * 
 * @param {number[]} array - Array of numbers
 * @returns {number}
 */
function minArray(array) {
  return Math.min(...array); // using math.min() to get minimum value in array is faster than using a for loop
}

/**
 * Get maximum value in array
 * 
 * @param {number[]} array 
 * @returns {number}
 */
function maxArray(array) {
  return Math.max(...array) // using math.max() to get maximum value in array is faster than using a for loop
}

// Strings

/**
 * 
 * @param {string} word string to be reversed
 * @returns {string}
 */
function reverseString(word) {
  return word.split("").reverse().join("");

}

// Numbers

/**
 * reverse a number (e.g. 12345 -> 54321)
 * 
 * @param {number} number 
 * @returns {number}
 */
function reverseNum(number) {
  // this code is changed from the original one because it didn't work properly when the number is decimal
  if (number < 10 && number > -10) {
    return number;
  }
  const parsedNumber = +(number > 10 ? number : number * -1).toString().split("").reverse().join("");
  return number > 10 ? parsedNumber : parsedNumber * -1; // this code more readable than the other one also it works with decimals too
}

// Valid Checks

/**
 * check if a number is even
 * 
 * @param {number} number 
 * @returns {boolean}
 */
function isEven(number) {
  return number % 2 == 0;
}

/**
 * check if a number is odd
 * 
 * @param {number} number 
 * @returns {boolean}
 */
function isOdd(number) {
  return number % 2 != 0;
}

/**
 * check if a string is a palindrome
 * 
 * @param {string} word 
 * @returns {boolean}
 */
function isPalindrome(word) {
  return word.toString() == reverseString(word.toString());
}

/**
 * check if a number is prime
 * 
 * @param {number} number 
 * @returns {number | boolean}
 */
function isPrime(number) {
  // this code is changed from the original one because it was causing infinite loop
  // when number % i never equals 0
  for (i = 2, s = Math.sqrt(number); i <= s; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return number;
}