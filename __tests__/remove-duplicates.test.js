const removeDuplicates = require('../katas/remove-duplicates');

describe('removeDuplicates tests', () => {
    test('returns a new array', () => {
        expect(removeDuplicates([])).toEqual([]);
    });
    test('returns a new array, which is a copy of the original array, if there are no duplicates', () => {
        expect(removeDuplicates([1, 2, 3, 4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    });
    test('returns a new array, with all of the duplicate values removed, in the same order as the original array', () => {
        expect(removeDuplicates([1, 1, 1, 1, 1, 2, 3])).toEqual([1, 2, 3]);
        expect(removeDuplicates([3, 1, 2, 1, 1, 2, 3])).toEqual([3, 1, 2]);
    });
});