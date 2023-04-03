const alternateCase = require('../katas/alternate-case');

describe('alernateCase tests', () => {
    test('returns a string', () => {
        expect(alternateCase('')).toBe('');
    });
    test('returns the provided string with each letter having an alternate case', () => {
        expect(alternateCase('hello')).toBe('HeLlO');
    });
    test('returns the provided string with each letter having an alternate case, allowing for muliple word strings', () => {
        expect(alternateCase('hello world')).toBe('HeLlO wOrLd');
    });
});