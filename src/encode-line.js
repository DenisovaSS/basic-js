const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
let str = "abbcca";
function encodeLine(str) {
  let newStr = "";
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      if (count > 1) {
        newStr += count + str[i];
      } else {
        newStr += str[i];
      }

      count = 1;
    }
  }
  return newStr;
  // const unicStr = [...new Set(str)];
  // let newStr = "";
  // unicStr.forEach((elem) => {
  //   let count = str.split("").filter((oneEl) => oneEl === elem).length;
  //   if (count > 1) {
  //     newStr = newStr + `${count}${elem}`;
  //   } else {
  //     newStr = newStr + elem;
  //   }
  // });
  // return newStr;
}
let r = encodeLine(str);
console.log(r);
module.exports = {
  encodeLine,
};
