const orderVeg = require('../katas/order-veg');

describe('orderVeg tests', () => {
    test('returns a new array', () => {
        expect(orderVeg([])).toEqual([])
    });
    test('returns a new array which is a copy of the original', () => {
        expect(orderVeg([{name: 'Parsnip', type: 'root', quantity: 4}]))
            .toEqual([{name: 'Parsnip', type: 'root', quantity: 4}])
    });
    test('returns a new array which is a copy of the original but sorted in ascending order based on quantity', () => {
        expect(orderVeg(
            [{name: 'Parsnip', type: 'root', quantity: 4},
            {name: 'Broccoli', type: 'brassica', quantity: 1},
            {name: 'Carrot', type: 'root', quantity: 5},
            {name: 'Onion', type: 'bulb', quantity: 3},
            {name: 'Chard', type: 'leaf', quantity: 3},
            {name: 'Runner beans', type: 'legume', quantity: 8}]))
            .toEqual(
                [{name: 'Broccoli', type: 'brassica', quantity: 1},
                {name: 'Onion', type: 'bulb', quantity: 3},
                {name: 'Chard', type: 'leaf', quantity: 3},
                {name: 'Parsnip', type: 'root', quantity: 4},
                {name: 'Carrot', type: 'root', quantity: 5},
                {name: 'Runner beans', type: 'legume', quantity: 8}])
    });
});