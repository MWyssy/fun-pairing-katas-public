/*
  The function getYearsOfGrowth should take 4 parameters: a starting population, an end population, 
  a percentage of growth and a netMigration figure.
  If the population grows by the given percentage each year, plus an additional number of net migrants, 
  the function should calculate how many years it takes until the end population total is reached.
  E.g.
  getYearsOfGrowth(1000, 2000, 2, 12);
  --> 25
*/

function getYearsOfGrowth(startPop, endPop, percentageGrowth, netMigration) {
  let years = 0;

  for (let i = startPop; i < endPop; i = (i * ((percentageGrowth /100) + 1) + netMigration)) {
    years ++;
  }

  return years;
}

module.exports = getYearsOfGrowth;
