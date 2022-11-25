// Write a function that determines if an array contains a pair that adds up to a value, k
// The array is sorted ahead of time.

//Expected Runtime
// Expected Runtime: O(N2) - find all pairs approach
// Expected space complexity: O(1) to store a constant number of variables

const sumToK = (arr, k) => {};

console.log(sumToK([5], 5) === false);
console.log(sumToK([4], 5) === false);
console.log(sumToK([], 15) === false);
console.log(sumToK([2, 4], 6) === true);
console.log(sumToK([4, 4], 8) === true);
console.log(sumToK([2, 4], 5) === false);
console.log(sumToK([4, 4], 7) === false);
console.log(sumToK([2, 2, 5, 8], 4) === true);
console.log(sumToK([4, 4, 4, 4], 8) === true);
console.log(sumToK([1, 5, 8, 10, 13, 18], 15) === true);
console.log(sumToK([1, 5, 8, 10, 13, 18], 12) === false);
