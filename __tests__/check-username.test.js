const checkUsernames = require('../katas/check-usernames');

describe('checkUsernames tests', () => {
    test('returns a boolean value', () => {
        expect(checkUsernames([])).toBe(false);
    });
    test('checks if the usernames are all lowercase, and returns true if so', () => {
        expect(checkUsernames(['mike wyss', 'Eliwyss', 'frankwyss', 'rosywyss'])).toBe(false);
    });
    test('checks if the usernames are all under 20 characters, and returns true if so', () => {
        expect(checkUsernames(['mikewyss', 'eliwyss', 'frankwyssssssssssssss', 'rosywyss'])).toBe(false);
    });
    test('checks if the usernames don\'t contain any spaces, and returns true if so', () => {
        expect(checkUsernames(['mike wyss', 'eliwyss', 'frankwyss', 'rosywyss'])).toBe(false);
    });
    test('returns true if all usernames are valid, regardless of underscores and numbers', () => {
        expect(checkUsernames(['mik3_wyss', 'el1_wyss', 'frank_wy55', 'rosy_wy55'])).toBe(true);
    });
});