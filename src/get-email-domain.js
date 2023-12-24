const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
const email = "very.unusual.@.unusual.com@usual.com";
function getEmailDomain(email) {
  let result = email.split("@");
  if (result.length > 2) {
    return result[result.length - 1];
  } else {
    return result[1];
  }
}
let r = getEmailDomain(email);
console.log(r);
module.exports = {
  getEmailDomain,
};
