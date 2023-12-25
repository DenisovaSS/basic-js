const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  array: [],
  getLength() {
    return this.array.length;
  },
  addLink(value) {
    this.array.push(`( ${String(value)} )`);
    return this;
  },
  removeLink(position) {
    if (!this.array[position - 1]) {
      this.array = [];
      throw new Error("You can't remove incorrect link!");
    } else this.array.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.array.reverse();
    return this;
  },
  finishChain() {
    const common = this.array.join("~~");
    this.array = [];
    return common;
  },
};
console.log(
  chainMaker
    .addLink(function () {})
    .addLink("2nd")
    .addLink("3rd")
    .removeLink(2)
    .reverseChain()
    .finishChain(),
);
module.exports = {
  chainMaker,
};
