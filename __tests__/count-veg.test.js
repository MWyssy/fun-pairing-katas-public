const countVeg = require('../katas/count-veg');

describe.only('countVeg test', () => {
    test('returns a number', () => {
        expect(countVeg([], '')).toBe(0);
    });
    test('returns the quantity of a single type of veg', () => {
        expect(countVeg([{name: 'Parsnip', type: 'root', quantity: 4}], 'root')).toBe(4);
    });
    test('returns the total quantity of all veg with the specified type', () => {
        expect(countVeg([
            {name: 'Parsnip', type: 'root', quantity: 4},
            {name: 'Broccoli', type: 'brassica', quantity: 1},
            {name: 'Carrot', type: 'root', quantity: 5},
            {name: 'Onion', type: 'bulb', quantity: 3},
            {name: 'Chard', type: 'leaf', quantity: 3},
            {name: 'Runner beans', type: 'legume', quantity: 8}
          ], 'root')).toBe(9);
    });
})