
// Log all pairs of array 
const boxes = ["1", "2", "3", "4", "5"];

function logAllPairsOfArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j]);
    }
  }
}

logAllPairsOfArray(boxes)

O(n * n) when loops are nested
O(n^2) Quadratic Time meaning if there are 3 elements it will be 9 operations 
O(3^2) = 9 horrible 