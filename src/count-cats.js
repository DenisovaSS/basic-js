const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  const myArr = matrix
    .map((e) => e.join(","))
    .join(",")
    .replaceAll(" ^^", "fK")
    .replaceAll(" ", "f");

  const countCats = myArr.split("^^").length - 1;
  if (countCats >= 1) {
    return countCats;
  }
  return 0;
}

module.exports = {
  countCats,
};
