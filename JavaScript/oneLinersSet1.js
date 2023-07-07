// Test driver
function test(...tests) {
	const results = [["passed", "actual", "expected"]];
	for (const [actual, expected] of tests) {
		const a = JSON.stringify(actual);
		const e = JSON.stringify(expected);
		results.push([a === e, a, a === e ? "-" : e]);
	}
	console.log(results);
}

/* PROBLEM 1
  Write a function that returns an new function. The new function
  takes no parameters and returns the original function's parameter.
*/

const redundant = (p) => () => p;

test(
  [redundant("hello")(), "hello"],
  [redundant(1)(), 1],
  [redundant()(), undefined],
  [redundant([1, 2])(), [1, 2]],
);

/* PROBLEM 2
  Write a function that sorts an array where the elements in the array
  might be number, or an array that contains a single number
*/

const sortIt = (arr) => arr.sort((a, b) => a - b);

test(
  [sortIt([4, 3, 2, 10]), [2, 3, 4, 10]],
  [sortIt([[4], 3, 2, 10]), [2, 3, [4], 10]],
  [sortIt([[20], [1], [3], [2]]), [[1], [2], [3], [20]]]
);

/* PROBLEM 3
  Write a function that takes a variable number of arrays as input
  and concatenates them into a single array
*/

function concat(...args) {
	// YOUR CODE HERE
}

// test(
//   [concat([1, 2], [3, 4]), [1, 2, 3, 4]],
//   [concat([1, 2], [], [3, 4], [0]), [1, 2, 3, 4, 0]]
// );

/* PROBLEM 4
  Write a function that converts an object into an array of
  [keys, value] pairs.
*/

function objectToArray(obj) {
	// YOUR CODE HERE
}

// test(
//   [objectToArray({D:1,B:2,C:3}), [["D", 1], ["B", 2], ["C", 3]]],
//   [objectToArray({likes:2,dislikes:3,followers:10}),[["likes", 2], ["dislikes", 3], ["followers", 10]]]
// );

/* PROBLEM 5
  Create a function that takes an object and returns the keys and
  values as separate arrays. Return the keys sorted alphabetically,
  and their corresponding values in the same order.

  This last problem is tricky because it requires multiple steps!
*/

function keysAndValues(obj) {
	// YOUR CODE HERE
}

// test(
//   [keysAndValues({ a: 1, b: 2, c: 3 }), [["a", "b", "c"], [1, 2, 3]]],
//   [keysAndValues({ a: "AAPL", b: "MSFT", c: "GOOG" }), [["a", "b", "c"], ["AAPL", "MSFT", "GOOG"]]],
//   [keysAndValues({ k1: true, k2: false, k3: undefined }), [["k1", "k2", "k3"], [true, false, undefined]]],
//   [keysAndValues({ b: 2, c: 3, a: 1 }), [["a", "b", "c"], [1, 2, 3]]]
// );
