const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
let names = ["file", "file", "image", "file(1)", "file", "file(2)"];
function renameFiles(names) {
  let result = {};
  let newNames = [];
  for (let i = 0; i < names.length; ++i) {
    let a = names[i];
    if (result[a] != undefined) {
      let newCurrent = `${a}(${result[a]})`;
      newNames.push(newCurrent);
      ++result[a];
    } else if (newNames.includes(a)) {
      result[a] = newNames.filter((el) => el === a).length;
      let newCurrentInd = `${a}(${result[a]})`;
      newNames.push(newCurrentInd);
      ++result[a];
    } else {
      result[a] = 1;
      newNames.push(a);
    }
  }
  return newNames;
}
let r = renameFiles(names);
console.log(r);
module.exports = {
  renameFiles,
};
