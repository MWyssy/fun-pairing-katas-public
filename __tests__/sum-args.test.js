const sumArgs = require('../katas/sum-args');

describe('sumArgs tests', () => {
    test('should return a number', () => {
        expect(sumArgs()).toBe(0);
    });
    test('should return the same number as inputted if only given one number', () => {
        expect(sumArgs(2)).toBe(2);
    });
    test('should return the sum of all the numbers inputted', () => {
        expect(sumArgs(2, 3, 4, 5)).toBe(14);
    });
});