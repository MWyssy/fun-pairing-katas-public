/*
  The function sumDigits should take a number (not necessarily an integer) and return the total of its digits.
  E.g.
  sumDigits(99)
    --> 18
  sumDigits(10.5)
    --> 6
*/
 
function sumDigits(number) {
  const result = number
    .toString()
    .replace(/\D/, '')
    .split('')
    .reduce((sum, x) => sum + Number(x), 0)
  return result;
}

module.exports = sumDigits;
