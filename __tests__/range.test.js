const range = require('../katas/range');

describe('range tests', () => {
    test('returns an array', () => {
        expect(range()).toEqual([]);
    });
    test('returns an array containing the range of numbers based on length, if only length is provided', () => {
        expect(range(5)).toEqual([0, 1, 2, 3, 4]);
    });
    test('returns an array containing the range of numbers based on length, starting at the value of start', () => {
        expect(range(5, 2)).toEqual([2, 3, 4, 5, 6]);
    });
    test('returns an array containing the range of numbers, incremementing by the value of step, based on length, starting at the value of start', () => {
        expect(range(5, 2, 2)).toEqual([2, 4, 6, 8, 10]);
    });
});