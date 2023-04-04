const caesarCipher = require('../katas/caesar-cipher');

describe('caeserCipher tests', () => {
    test('returns a string', () => {
        expect(caesarCipher()).toBe('');
    });
    test('returns the string provided if no number is provided', () => {
        expect(caesarCipher('hello')).toBe('hello');
    });
    test('returns a new string with each letter incremented up based on N, if N is positive', () => {
        expect(caesarCipher('hello', 2)).toBe('jgnnq');
    });
    test('returns a new string with each letter decremented down based on N, if N is negative', () => {
        expect(caesarCipher('hello', -3)).toBe('ebiil');
    });
});