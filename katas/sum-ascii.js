/*
  The function sumAscii should take an array of names and calculate each name's score based on 
  the total of each character's lowercase ASCII value. It should return the name with the 
  highest score.
  E.g. the name 'John' would get the score 431 because 'j' has the ASCII code 106, 'o' has 
  the ASCII code 111, 'h' has the ASCII code 104 and 'n' has the ASCII code 110.
*/

function sumAscii(array) {
  if (array.length === 0) return '';
  let name = '';
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum = 0;
    if (array[i].toLowerCase().split('').reduce((sum, x) => sum + x.charCodeAt(0), 0) > sum) {
      sum = array[i].toLowerCase().split('').reduce((sum, x) => sum + x.charCodeAt(0), 0);
      name = array[i];
    };

  }

  return name;
}

module.exports = sumAscii;
