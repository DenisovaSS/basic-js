const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
let s1 = "aabcc",
  s2 = "adcaa";
function getCommonCharacterCount(s1, s2) {
  let commonCount = 0;
  const unicStr = [...new Set(s1 + s2)];
  unicStr.forEach((elem) => {
    let countS1 = s1.split("").filter((oneEl) => oneEl === elem).length;
    let countS2 = s2.split("").filter((oneEl) => oneEl === elem).length;
    if (countS1 && countS2) {
      commonCount += Math.min(countS1, countS2);
    }
  });

  return commonCount;
}
const r = getCommonCharacterCount(s1, s2);
console.log(r);
module.exports = {
  getCommonCharacterCount,
};
