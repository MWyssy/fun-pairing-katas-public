const sumAscii = require('../katas/sum-ascii');

describe('sumAscii tests', () => {
    test('should return a string', () => {
        expect(sumAscii([])).toBe('');
    });
    test('should return a the name if passed a single name', () => {
        expect(sumAscii(['mike'])).toBe('mike');
    });
    test('should ignore case', () => {
        expect(sumAscii(['MIKE'])).toBe('MIKE');
    });
    test('should return the name with the highest ASCII score', () => {
        expect(sumAscii(['MIKE', 'eli', 'frank', 'rosy'])).toBe('rosy');
    });
});