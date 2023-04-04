/*
  The function getDistinctLetters should take two strings and return a string of all the letters that are 
  unique to either of the input strings, in alphabetical order.

  For example, when given 'hello' and 'world', the function should return 'dehrw'
  This is because h and e are in 'hello' but not in 'world', and w, r and d are in 'world' but not in 
  'hello'. hewrd' sorted => 'dehrw'
*/

function getDistinctLetters(string1, string2) {
  let firstWord = string1;
  let secondWord = string2;

  if (firstWord === undefined) {
    firstWord = '';
  }
  if (secondWord === undefined) {
    secondWord = '';
  }

  const result = [];

  function checkDuplicates(wordArray, wordToCheck) {
    for (let i = 0; i < wordArray.length; i++) {
      if (!wordToCheck.includes(wordArray[i])) {
        result.push(wordArray[i]);
      }
    }
  }

  checkDuplicates(firstWord.split(''), secondWord);
  checkDuplicates(secondWord.split(''), firstWord);

  return result.sort().join('');
}

module.exports = getDistinctLetters;
