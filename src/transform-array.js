const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *'--discard-prev'
 '--double-prev'
 '--double-next'
 '--discard-next'

 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
let arr = [1, 2, 3, "--discard-next", 1337, "--double-prev", 4, 5];
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let newArr = [...arr];
  for (let i = 0; i < newArr.length; i++) {
    switch (newArr[i]) {
      case "--discard-prev":
        if (i !== 0) {
          newArr.splice(i - 1, 1);
          i--;
        }
        break;
      case "--double-next":
        if (i !== newArr.length - 1) {
          newArr.splice(i + 1, 0, newArr[i + 1]);
          i++;
        }
        break;
      case "--double-prev":
        if (i !== 0) {
          newArr.splice(i - 1, 0, newArr[i - 1]);
          i++;
        }
        break;
      case "--discard-next":
        if (i !== newArr.length - 1 && newArr[i + 2] !== "--discard-prev") {
          newArr.splice(i + 1, 1);
        }
        break;
      default:
        break;
    }
    console.log(newArr);
  }

  const result = newArr.filter(
    (item) =>
      ![
        "--discard-next",
        "--discard-prev",
        "--double-next",
        "--double-prev",
      ].includes(item),
  );

  return result;
}
let r = transform(arr);
console.log(r);
module.exports = {
  transform,
};
