const getMostRepeated = require('../katas/get-most-repeated');

describe('getMostRepeated tests', () => {
    test('returns a string', () => {
        expect(getMostRepeated()).toBe('');
    });
    test('returns the letter if a single letter is provided', () => {
        expect(getMostRepeated('a')).toBe('a');
    });
    test('returns the most common letter from the provided string', () => {
        expect(getMostRepeated('aabc')).toBe('a');
    });
    test('returns the most common letter from the provided string. If there are more than one most common characters, return the first alphabetically', () => {
        expect(getMostRepeated('bbcca')).toBe('b');
    });
    test('ignores special characters and spaces', () => {
        expect(getMostRepeated('b&&b c_c$#a')).toBe('b');
    });
});