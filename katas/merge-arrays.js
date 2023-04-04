/*
  The function mergeArrays should take 2 arrays and merges them into one array, taking one item from 
  each array at a time.
  If the arrays are of uneven length, then simply continue adding elements from the longest array 
  onto the end of the merged array.
  E.g. [1, 2, 3] and ['a', 'b', 'c'] --> [1, 'a', 2, 'b', 3, 'c']
  [1, 2, 3, 4, 5] and ['a', 'b', 'c'] --> [1, 'a', 2, 'b', 3, 'c', 4, 5]
*/

function mergeArrays(arr1, arr2) {
  if (arr1 === undefined) {
    arr1 = [];
  }
  if (arr2 === undefined) {
    arr2 = [];
  }

  const result = [];
  let longerArray = arr1;

  if (arr2.length > arr1.length) {
    longerArray = arr2;
  } 

  for (let i = 0; i < longerArray.length; i++) {
    if (arr1[i]) result.push(arr1[i]);
    if (arr2[i]) result.push(arr2[i]);
  }
  
  return result
}

module.exports = mergeArrays;
