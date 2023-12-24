const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
const str = true,
  options = {
    repeatTimes: 3,
    separator: "??? ",
    addition: false,
    additionRepeatTimes: 2,
    additionSeparator: "!!!",
  };
function repeater(str, options) {
  str = String(str);

  // console.log(str);
  let separator = options.separator ? options.separator : "+";
  let additionSeparator = options.additionSeparator
    ? options.additionSeparator
    : "|";
  let addition = Object.hasOwn(options, "addition")
    ? String(options.addition)
    : "";
  if (addition) {
    let array = Array(options.additionRepeatTimes).fill(addition);
    // console.log(array);
    let fillStr = array.join(additionSeparator);
    let arrayMain = Array(options.repeatTimes).fill(str + fillStr);
    let fillStrMain = arrayMain.join(separator);
    return fillStrMain;
  } else {
    let arrayMain = Array(options.repeatTimes).fill(str);
    let fillStrMain = arrayMain.join(separator);
    return fillStrMain;
  }
}
const r = repeater(str, options);
console.log(r);
module.exports = {
  repeater,
};
