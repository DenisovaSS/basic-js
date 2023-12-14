const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const s = String(n).split("").map(Number);
  let f = s.map((el, i) => {
    let r = s.slice();
    r.splice(i, 1);
    return Number(r.join(""));
  });
  const result = Math.max(...f);
  return result;
}

module.exports = {
  deleteDigit,
};
