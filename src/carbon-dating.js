const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */

function dateSample(sampleActivity) {
  const NumsampleActivity = Number(sampleActivity);
  const MODERN_ACTIVITY = 15;
  const HALF_LIFE_PERIOD = 5730;
  let k = Math.LN2 / HALF_LIFE_PERIOD;
  let age = Math.log(MODERN_ACTIVITY / NumsampleActivity) / k;
  if (
    typeof sampleActivity === "string" &&
    typeof NumsampleActivity === "number" &&
    age > 0 &&
    Number.isFinite(age)
  ) {
    return Math.ceil(age);
  } else {
    return false;
  }
}

module.exports = {
  dateSample,
};
