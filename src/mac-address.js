const { NotImplementedError } = require("../extensions/index.js");

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
const n = "G0-00-00-00-00-00";
function isMAC48Address(n) {
  let newN = n.replaceAll("-", "");
  if (parseInt(newN, 16)) {
    return true;
  }
  return false;
}
let r = isMAC48Address(n);
console.log(r);
module.exports = {
  isMAC48Address,
};
