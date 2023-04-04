const getYearsOfGrowth = require('../katas/get-years-of-growth');

describe('getYearsOfGrowth test', () => {
    test('returns a number', () => {
        expect(getYearsOfGrowth()).toBe(0);
    });
    test('returns the correct number of years of growth based on the percentage growth rate', () => {
        expect(getYearsOfGrowth(1000, 2000, 2, 0)).toBe(36);
    });
    test('returns the correct number of years of growth based on the percentage growth rate, accounting for migration', () => {
        expect(getYearsOfGrowth(1000, 2000, 2, 12)).toBe(25);
    });
});