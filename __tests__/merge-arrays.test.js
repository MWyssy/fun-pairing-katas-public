const mergeArrays = require('../katas/merge-arrays');

describe('mergeArrays tests', () => {
    test('returns a new array', () => {
        expect(mergeArrays()).toEqual([]);
    });
    test('if the input arrays only contain one value each, return a new array with both values', () => {
        expect(mergeArrays([1], [2])).toEqual([1, 2]);
    });
    test('return a new array containing alternating values from two equal length arrays', () => {
        expect(mergeArrays([1, 3, 5, 7, 9], [2, 4, 6, 8, 10])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
    test('return a new array containing alternating values from two arrays, adding the remaining values of the longer array to the end', () => {
        expect(mergeArrays([1, 3, 5, 7, 9,], [2, 4, 6, 8, 10, 11, 12, 13])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
        expect(mergeArrays([1, 3, 5, 7, 9, 11, 12, 13], [2, 4, 6, 8, 10])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
    });
});