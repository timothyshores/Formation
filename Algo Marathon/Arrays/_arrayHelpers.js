/**
 * Helper Functions for Testing JavaScript Array-based Functions
 *
 * This JavaScript file contains a collection of helper functions designed to streamline
 * the testing process for array-based functions. It serves as a valuable tool for software
 * developers to test their custom array functions effectively.
 *
 * Included Functions:
 * 1. `doubleEveryNumber`: An example array-based function that doubles every number in an array.
 *    - Demonstrates how to write a simple array function.
 *
 * 2. `arrayEquals`: Compares two arrays for equality, ensuring both values and types match.
 *    - Useful for validating the correctness of array-based function results.
 *
 * 3. `formatArray`: Formats an array as a string representation for easy console output.
 *    - A handy utility for displaying arrays during testing.
 *
 * 4. `runTests`: Runs a series of test cases on an implementation function and provides clear results.
 *    - Simplifies the process of testing array-based functions with structured test data.
 *
 * Test Data Usage:
 * The `testData` array of objects contains test cases for evaluating array-based functions.
 * Each test case includes a name, input data, and the expected output. To test your function,
 * pass it as the `implementation` parameter to the `runTests` function alongside `testData`.
 *
 * Example Usage:
 * ```
 * const myFunction = (arr) => {
 *   // Your array-based logic here
 * };
 *
 * const testResults = runTests(myFunction, testData);
 * console.table(testResults);
 * ```
 *
 */

/**
 * Double every number in an array.
 *
 * @param {Array} arr - The input array.
 * @returns {Array} Returns a new array with doubled numbers.
 */
const doubleEveryNumber = (arr) => {
	return arr.map((number) => number * 2);
};

/**
 * Compare two arrays for equality.
 *
 * @param {Array} a - The first array for comparison.
 * @param {Array} b - The second array for comparison.
 * @returns {boolean} Returns true if the arrays are equal, otherwise false.
 */
const arrayEquals = (a, b) => {
	return a.length === b.length && a.every((val, index) => val === b[index]);
};

/**
 * Test Data Array for doubleEveryNumber Function
 *
 * This array contains test cases for evaluating the functionality of the `doubleEveryNumber` function.
 * Each test case is an object with the following properties:
 *
 * @typedef {Object} TestCase
 * @property {string} name - A descriptive name for the test case.
 * @property {Array} input - The input array to be processed by `doubleEveryNumber`.
 * @property {Array} expectedOutput - The expected output array after doubling every element.
 *
 * @type {Array.<TestCase>}
 */
const testData = [
	{
		name: "empty",
		input: [],
		expectedOutput: [],
	},
	{
		name: "singlePositiveElement",
		input: [5],
		expectedOutput: [10],
	},
	{
		name: "singleNegativeElement",
		input: [-1],
		expectedOutput: [-2],
	},
	{
		name: "multiplePositiveElements",
		input: [1, 2, 3],
		expectedOutput: [2, 4, 6],
	},
	{
		name: "zeroValueElements",
		input: [0, 0],
		expectedOutput: [0, 0],
	},
	{
		name: "negativeIntegers",
		input: [-10, -25],
		expectedOutput: [-20, -50],
	},
];

/**
 * Format an array as a string representation.
 *
 * This function takes an array as input and returns its string representation. If the input is an array,
 * it is converted to a JSON string, otherwise, the input is returned as is.
 *
 * @param {Array|*} array - The array or value to be formatted as a string.
 * @returns {string} The string representation of the input array or value.
 */
const formatArray = (array) => {
	return Array.isArray(array) ? JSON.stringify(array) : array;
};

/**
 * Run a series of test cases on an implementation function.
 *
 * This function takes an implementation function and a set of test cases, executes the
 * implementation with each test case's input, and compares the actual output to the
 * expected output. It returns an array of test results.
 *
 * @param {function} implementation - The function to be tested.
 * @param {Array.<TestCase>} testData - An array of test cases to evaluate the function.
 * @returns {Array.<TestResult>} An array of test results, one for each test case.
 */
const runTests = (implementation, testData) => {
	return testData.map(({ name, input, expectedOutput }) => {
		const actualOutput = implementation(input);
		return {
			"Test Name": name,
			"Test Input": formatArray(input),
			"Actual Output": formatArray(actualOutput),
			"Expected Output": formatArray(expectedOutput),
			"Test Passes": arrayEquals(actualOutput, expectedOutput),
		};
	});
};

const doubleEveryNumberTestResults = runTests(doubleEveryNumber, testData);

// Display the formatted test results as tables
console.log("Double Every Number Test Results:");
console.table(doubleEveryNumberTestResults);
