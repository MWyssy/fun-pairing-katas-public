const getCentury = require('../katas/get-century');

describe('test getCentury function', () => {
    test('returns a string', () => {
        expect(getCentury(-1)).toBe('');
    });
    test('returns the century of the provided year', () => {
        expect(getCentury(1999)).toBe('20th');
        expect(getCentury(1866)).toBe('19th');
    });
    test('returns the correct century if the provided year is less than 4 digits long', () => {
        expect(getCentury(199)).toBe('2nd');
    })
});