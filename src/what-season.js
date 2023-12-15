const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  try {
    if (date === undefined) {
      return "Unable to determine the time of year!";
    }
    //Object.prototype.toString.call(data); // "[object Data]"
    if (typeof date.valueOf() !== "number") {
      throw new Error("Invalid date!");
    }

    return date.getMonth() > 1 && date.getMonth() < 5
      ? "spring"
      : date.getMonth() > 7 && date.getMonth() < 11
      ? "autumn"
      : date.getMonth() > 4 && date.getMonth() < 8
      ? "summer"
      : "winter";
  } catch {
    throw new Error("Invalid date!");
  }
}
module.exports = {
  getSeason,
};
