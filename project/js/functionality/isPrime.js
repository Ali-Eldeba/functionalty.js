/**
 * check if a number is prime
 *
 * @param {number} number
 * @returns {boolean}
 */
function isPrime(number) {
  if (typeof number !== "number") {
    throw new TypeError('Expected a number but got ' + typeof number);
  }
  for (i = 2, s = Math.sqrt(number); i <= s; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
module.exports = isPrime;
