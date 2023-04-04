const checkStudents = require('../katas/check-students');

describe('checkStudents test', () => {
    test('returns a boolean value', () => {
        expect(checkStudents([])).toBe(false);
    });
    test('returns true if there is one student, and they are in the correct cohort', () => {
        expect(checkStudents([{name: 'Ben', cohort: 'October'}], 'October')).toBe(true);
    });
    test('returns true if all of multiple students are in the correct cohort', () => {
        expect(checkStudents([
            {name: 'Ben', cohort: 'October'},
            {name: 'Amanda', cohort: 'October'},
            {name: 'Matt', cohort: 'October'}], 'October'))
            .toBe(true);
    });
    test('returns false if any of multiple students are not in the correct cohort', () => {
        expect(checkStudents([
            {name: 'Ben', cohort: 'April'},
            {name: 'Amanda', cohort: 'October'},
            {name: 'Matt', cohort: 'October'}], 'April'))
            .toBe(false);
    });
});