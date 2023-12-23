const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
// const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
// console.log(alphabet);
class VigenereCipheringMachine {
  constructor(notReverse = true) {
    this.notReverse = notReverse;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  encrypt(message, key) {
    if (!message || !key) throw new Error("Incorrect arguments!");
    message = message.toUpperCase();
    let countLetter = Math.trunc(message.length / key.length + 1);
    key = key.toUpperCase().repeat(countLetter);
    let kodeKey = key.split("").map((element) => {
      return this.alphabet.indexOf(element);
    });
    // let kodeMass = message
    //   .toUpperCase()
    //   .split("")
    //   .map((element) => {
    //     return this.alphabet.indexOf(element);
    //   });
    let result = "";
    let indexKey = 0;
    for (let i = 0; i < message.length; i++) {
      let curentLetter = message[i];
      let indexLetter = this.alphabet.indexOf(curentLetter);
      if (indexLetter < 0) {
        result += curentLetter;
      } else {
        let countIndex =
          (indexLetter + kodeKey[indexKey]) % this.alphabet.length;
        let newLetter = this.alphabet[countIndex];
        result += newLetter;
        indexKey++;
      }
    }
    if (!this.notReverse) result = result.split("").reverse().join("");
    return result;
  }
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error("Incorrect arguments!");
    encryptedMessage = encryptedMessage.toUpperCase();
    let countLetter = Math.trunc(encryptedMessage.length / key.length + 1);
    key = key.toUpperCase().repeat(countLetter);
    let kodeKey = key.split("").map((element) => {
      return this.alphabet.indexOf(element);
    });
    let result = "";
    let indexKey = 0;
    for (let i = 0; i < encryptedMessage.length; i++) {
      let curentLetter = encryptedMessage[i];
      let indexLetter = this.alphabet.indexOf(curentLetter);
      if (indexLetter < 0) {
        result += curentLetter;
      } else {
        let countIndex =
          (indexLetter - kodeKey[indexKey] + this.alphabet.length) %
          this.alphabet.length;
        // console.log(countIndex);
        let newLetter = this.alphabet[countIndex];
        result += newLetter;
        indexKey++;
      }
    }
    if (!this.notReverse) result = result.split("").reverse().join("");
    return result;
  }
}
// const directMachine = new VigenereCipheringMachine();
// console.log(directMachine.decrypt("AEIHQX SX DLLU!", "alphonse"));
const reverseMachine = new VigenereCipheringMachine(false);
console.log(reverseMachine.encrypt("attack at dawn!", "alphonse"));
module.exports = {
  VigenereCipheringMachine,
};
