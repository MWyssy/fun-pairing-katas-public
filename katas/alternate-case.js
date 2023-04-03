/*
  the alternateCase function should take a string and return a string.
  Every other letter either capital or lower case, starting with a capital letter.
  
  'hello' would become 'HeLlO'
  'hello world' would become 'HeLlO wOrLd'
*/

function alternateCase(string) {
  const words = string.split(' ');
  
  let altCase = '';

  for (let i = 0; i < words.length; i++) {
    let altCaseWord = '';
    if (i % 2 != 0) {
       altCaseWord = words[i]
      .toLowerCase()
      .split('')
      .map((x, index) => {
        if (index % 2 === 1) {
         return x.toUpperCase();
        } return x 
      })
      .join('');
    } else {
      altCaseWord = words[i]
        .toUpperCase()
        .split('')
        .map((x, index) => {
          if (index % 2 === 1) {
          return x.toLowerCase();
          } return x 
        })
        .join('');
    }  
    
      altCase += `${altCaseWord} `
  }
  
  return altCase.trim();
}

module.exports = alternateCase;
