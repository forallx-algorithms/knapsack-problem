/*
  Finds the optimal solution for the knapsack problem
  http://en.wikipedia.org/wiki/Knapsack_problem

  @author Evgeniy Kuznetsov
  @date   18.04.2015
*/


// Solves knapsack problem
// @param {Integer} size Knapsack capacity
// @param {Array.<Items>} items
function solveKnapsack(size, items) {
  // 2D cache for solutions
  // First index denotes number of items
  // Second index denotes size of the knapsack
  var m = [ [] ];

  // Fill cache with solutions for knapsack without items
  for(var z = 0; z <= size; z++) m[0][z] = 0;

  for(var i = 1; i <= items.length; i++) {
    // Throw away unneeded solutions
    delete m[i - 2];

    // Create new solution entry
    m[i] = [];

    for(var j = 0; j <= size; j++) {
      var curCost   = items[i - 1][0];
      var curWeight = items[i - 1][1];

      // Solution witch excludes current item
      var excluded = m[i - 1][j];

      if(curWeight <= j) {
        m[i][j] = Math.max(excluded, m[i - 1][j - curWeight] + curCost);
      } else {
        m[i][j] = excluded;
      }

    }
  }

  return m[items.length][size];
}


// section: Tests

var knapsackSize = 15;
var simpleProblem = [
  [100, 13],
  [75, 7],
  [80, 7]
];

console.log("Case 1:", solveKnapsack(knapsackSize, simpleProblem) == 155, solveKnapsack(knapsackSize, simpleProblem));




