const lengthenDate = require('../katas/lengthen-date');

describe('lengthenDate tests', () => {
    test('returns a string', () => {
        expect(lengthenDate()).toBe('');
    });
    test('converts number date to written date, formatted as "Day" "Date" "Month" "Year"', () => {
        expect(lengthenDate('21.03.2017')).toBe('Tuesday 21st March 2017');
    });
    test('provides the correct ordinal for the date of the month', () => {
        expect(lengthenDate('22.03.2017')).toBe('Wednesday 22nd March 2017');
        expect(lengthenDate('23.03.2017')).toBe('Thursday 23rd March 2017');
    });
});