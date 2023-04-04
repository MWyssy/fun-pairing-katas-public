const getDistinctLetters = require('../katas/get-distinct-letters');

describe('getDistinctLetters tests', () => {
    test('returns a string', () => {
        expect(getDistinctLetters()).toBe('');
    });
    test('returns a string sorted into alphabetical order', () => {
        expect(getDistinctLetters('hello')).toBe('ehllo');
    });
    test('removes all duplicate letters and returns a string sorted alphabetically', () => {
        expect(getDistinctLetters('hello', 'world')).toBe('dehrw');
        expect(getDistinctLetters('chocolate', 'orange')).toBe('ccghlnrt');
    });
});