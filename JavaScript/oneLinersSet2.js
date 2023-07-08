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
  Implement factorial as a one liner. Recall that the factorial of
  a number is the number multiplied by every positive integer less
  than it.

  factorial(5) = 5! = 5 * 4 * 3 * 2 * 1 = 120
*/

const factorial = (v) => (v < 2 ? 1 : v * factorial(v - 1));

test(
	[factorial(0), 1],
	[factorial(1), 1],
	[factorial(2), 2],
	[factorial(3), 6],
	[factorial(5), 120],
	[factorial(13), 6227020800]
);

/* PROBLEM 2
  Write a function that takes two arrays, and zips them together.
  That is, return a new array which is the first from each array
  together in a sub-array, then the second, then the third, etc.
  If the lengths of the arrays do not match, return "not possible".

  The "not possible" case can be handled by an if statement, but
  the rest should be a one liner. 

  [1, 2] and [3, 4] zip into [[1, 3], [2, 4]]
*/

function zip(a1, a2) {
	// YOUR CODE HERE
}

// test(
//   [zip([], []), []],
//   [zip([1, 2], [3, 4]), [[1, 3], [2, 4]]],
//   [zip([1, 2], ['a', 'b']), [[1, 'a'], [2, 'b']]],
//   [zip([1, 2], ['a']), "not possible"],
// );

/* PROBLEM 3
  Create a function that squares every digit of a number.
*/

function squareDigits(n) {
	// YOUR CODE HERE
}

// test(
//   [squareDigits(3), 9],
//   [squareDigits(7), 49],
//   [squareDigits(62), 364],
//   [squareDigits(9119), 811181],
//   [squareDigits(2483), 416649],
// );

/* PROBLEM 4
  Create a function that takes an array of integers and
  strings and return a new array without the strings.
*/

function removeStrings(array) {
	// YOUR CODE HERE
}

// test(
//   [removeStrings(["a"]), []],
//   [removeStrings(["a", 1]), [1]],
//   [removeStrings([1, "a", "b", 0, 15]), [1, 0, 15]],
//   [removeStrings([1, 2, "aasf", "1", "123", 123]), [1, 2, 123]]
// );

/* PROBLEM 5
  Write a function that returns an array of [value, key] pairs.
*/

function valuesAndKeys(obj) {
	// YOUR CODE HERE
}

// test(
//   [valuesAndKeys({}), []],
//   [valuesAndKeys({a:1, b:2}), [[1, 'a'], [2, 'b']]],
// );
