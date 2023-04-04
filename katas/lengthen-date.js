const getCentury = require("./get-century");

/*
  The function lengthenDate should take a date in the format '21.03.2017' and return a string in the 
  format 'Tuesday 9th February 2017'
*/

function lengthenDate(date) {
  if (date === undefined) return '';

  let regEx = /[^\.]{2,}/g
  let dayNum = date.match(regEx)[0];
  let monthNum = (Math.floor(date.match(regEx)[1]) - 1);
  let year = date.match(regEx)[2];

  let writtenDate = new Date(year, monthNum, dayNum).toDateString();

  let day = writtenDate.match(/[^\W]{3}/)
  let days = {
    'Mon': 'Monday',
    'Tue': 'Tuesday',
    'Wed': 'Wednesday',
    'Thu': 'Thursday',
    'Fri': 'Friday',
    'Sat': 'Saturday',
    'Sun': 'Sunday',
  }

  let month = writtenDate.match(/[^\W]{3}/g)[1];
  let months = {
    'Jan': 'January',
    'Feb': 'February',
    'Mar': 'March',
    'Apr': 'April',
    'May': 'May',
    'Jun': 'June',
    'Jul': 'July',
    'Aug': 'August',
    'Sep': 'September',
    'Oct': 'October',
    'Nov': 'November',
    'Dec': 'December',
  }
  let ordinal = 'th';

  if (Number(dayNum[1]) === 1) {
    ordinal = 'st';
  } else if (Number(dayNum[1]) === 2) {
    ordinal = 'nd'
  } else if (Number(dayNum[1]) === 3) {
    ordinal = 'rd'
  }

  let result = `${days[day]} ${dayNum}${ordinal} ${months[month]} ${year}`;

  return result;
}

module.exports = lengthenDate;
