/*
  The function caesarCipher should take a string and a number (n) and return a new string with a 
  Caesar cipher applied. A Caesar cipher replaces each plaintext letter with a different one a fixed 
  number of places up or down the alphabet. N represents the number of shifts up or down the alphabet 
  should be applied. It may be negative or positive.
  E.g.
  caesarCipher('hello', 2)
    --> 'jgnnq'
  caesarCipher('hello world!', -3)
    --> 'ebiil tloia!'
*/

function caesarCipher(string, number) {
  if (string === undefined) return '';

  let result = '';
  if (number === undefined) {
    return result = string;
  };

  result = string.split('').map((x) => x = String.fromCharCode((x.charCodeAt(0) + number))).join('');

  return result;
}


module.exports = caesarCipher;
