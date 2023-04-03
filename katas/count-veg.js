/*
  The function countVeg should take an array of vegetables and a string of the type of vegetable and 
  return the total quantity of that type of vegetable in the array.
  Vegetable types can be root, leaf, legume, bulb or brassica.
  e.g.
  countVeg([
  {name: 'Broccoli', type: 'brassica', quantity: 1},
  {name: 'Carrot', type: 'root', quantity: 5},
  {name: 'Onion', type: 'bulb', quantity: 3},
  {name: 'Chard', type: 'leaf', quantity: 3},
  {name: 'Runner beans', type: 'legume', quantity: 8}
], 'root') should return 9
*/

function countVeg(array, string) {
  if (array.length === 0) return 0;
  const quantities = array.map((x) => {
    if (x.type === 'root') {
      return x.quantity;
    }
    return 0;
  });
  const quantity = quantities.reduce((sum, x) => sum + x, 0);

  return quantity;
}

module.exports = countVeg;
