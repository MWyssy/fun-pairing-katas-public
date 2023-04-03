const areOrdered = require('../katas/are-ordered');

describe('areOrdered tests', () => {
    test('Should return a boolean value', () => {
        expect(areOrdered([])).toBe(false);
    });
    test('Should return false if the numbers are not in ascending order', () => {
        expect(areOrdered([4, 1, 3, 2])).toBe(false);
    });
    test('Should return true if the numbers are in ascending order', () => {
        expect(areOrdered([1, 2, 3])).toBe(true);
    });
});