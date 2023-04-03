/*
  The function getCentury should take a year as a number and return the century.
  E.g. 1999 should return '20th'
  2004 should return '21st'
  1877 should return '19th'
  It should work up to and including the year 9,999 (the '100th' century)
*/

function getCentury(year) {
  if (year < 0) return '';

  let yearArray = year.toString().split('');

  while (yearArray.length < 4) {
    yearArray.unshift('0');
  }

  let century = (Number(yearArray[0] + yearArray[1])) + 1;

  let ordinal = 'th';

  if ((Number(yearArray[1]) + 1) === 1 && yearArray[0] != '1') {
    ordinal = 'st'
  } else if ((Number(yearArray[1]) + 1) === 2 && yearArray[0] != '1') {
    ordinal = 'nd'
  } else if ((Number(yearArray[1]) + 1) === 3 && yearArray[0] != '1') {
    ordinal = 'rd'
  } else if (yearArray[0] === '0' && yearArray[1] === '0') {
    ordinal = 'st'
  }

  return `${century}${ordinal}`;
}

module.exports = getCentury;
