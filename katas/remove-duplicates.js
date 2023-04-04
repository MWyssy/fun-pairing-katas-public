/*
  The function removeDuplicates should take an array and return a new array with any duplicate items removed.
   The original order should be maintained.
*/

function removeDuplicates(array) {
  const uniques = new Set([...array])
  const resultingArray = [...uniques];

  return resultingArray;
}

module.exports = removeDuplicates;
