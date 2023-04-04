const getFrequencies = require('../katas/get-frequencies');

describe('getFrequencies', () => {
    test('returns an object', () => {
        expect(getFrequencies()).toEqual({});
    });
    test('returns an object containing one of every letter in the string as a key, returning a value of 1 if all are uniquew', () => {
        expect(getFrequencies('abc')).toEqual({'a': 1, 'b': 1, 'c': 1});
    });
    test('returns an object containing one of every unique letter in the string as a key, returning a value based on how many times that letter appears', () => {
        expect(getFrequencies('abcc')).toEqual({'a': 1, 'b': 1, 'c': 2}); 
    });
    test('ignores spaces and special characters', () => {
        expect(getFrequencies('hello world')).toEqual({
            h: 1,
            e: 1,
            l: 3,
            o: 2,
            w: 1,
            r: 1,
            d: 1
        });
        expect(getFrequencies('hello_world?!$%')).toEqual({
            h: 1,
            e: 1,
            l: 3,
            o: 2,
            w: 1,
            r: 1,
            d: 1
        });
    })
});