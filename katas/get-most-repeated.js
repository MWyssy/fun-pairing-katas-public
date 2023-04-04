/*
  The function getMostRepeated should take a string and return the character that is most repeated 
  throughout the string, ignoring whitespace and special characters. If two characters are both equally 
  common, return the one that comes first alphabetically.
  If you have already implemented the getFrequencies function, it may be helpful! It is imported into this 
  file for you to use if you wish.
*/

const getFrequencies = require('./get-frequencies');

function getMostRepeated(string) {
  if (string === undefined) return '';

  let character = '';
  const letters = getFrequencies(string.split('').sort().join(''));
  let count = 0;

  for (let letter in letters) {
    if (letters[letter] > count) {
      count = letters[letter]
    }
  }
  
  for (let letter in letters) {
    if (count === letters[letter]) {
      return character = letter
    }
  }

  return character;
}

module.exports = getMostRepeated;
