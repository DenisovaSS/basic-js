const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
const n = 98;
function getSumOfDigits(n) {
  let summ = 0;
  while (n) {
    summ += n % 10;
    n = Math.floor(n / 10);
  }
  if (summ.toString().length > 1) {
    return getSumOfDigits(summ);
  } else {
    return summ;
  }
  // console.log((n - 1) % 9);
  // return ((n - 1) % 9) + 1;
}
let r = getSumOfDigits(n);
console.log(r);
module.exports = {
  getSumOfDigits,
};
