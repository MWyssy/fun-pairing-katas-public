/*
  The function checkUsernames should take an array of usernames and return true if they are all 
  valid and false if any are not valid.
  A valid username:
  - is at least 5 characters long
  - may only contain lowercase letters, numbers and underscores
  - is no longer than 20 characters

  eg ['mikewyss', 'eliwyss', 'frankwyss', 'rosywyss'] should return true
  ['mike wyss', 'Eliwyss', 'frankwyss', 'rosywyss'] should return false
  ['mik3_wyss', 'el1_wyss', 'frank_wy55', 'rosy_wy55'] should return true
  ['mikewyss', 'eliwyss', 'frankwyssssssssssssss', 'rosywyss'] should return false
*/

function checkUsernames(array) {
  if (array.length === 0) return false;

  for (let i = 0; i < array.length; i++) {
    if (array[i] != array[i].toLowerCase()) {
      return false;
    }
    if (array[i].length > 20) {
      return false;
    }
    if (array[i] != array[i].replaceAll(' ', '')) {
      return false;
    }
  }

  return true;
}

module.exports = checkUsernames;
