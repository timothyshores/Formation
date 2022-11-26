// Prompt
// Determine if an array is monotonic or not. An array is monotonic if it is either monotone increasing or monotone decreasing.

// Expected Runtime
// Time: O(N) to iterate through the length N array
// Space: O(1) to store a constant number of variables

// Examples
// [1] => true
// [1, 2] => true
// [2, 1] => true
// [2, 1, 3] => false

const isMonotonic = (array) => {
	if (array.length < 2) return true;

	let decreasing = false;
	let increasing = false;
	let index = 1;

	while (index < array.length) {
		// increasing
		if (array[0] < array[index]) {
			increasing = true;
			break;
		}
		// decreasing
		if (array[0] > array[index]) {
			decreasing = true;
			break;
		}
		// if every number is the same then we return true
		if (index === array.length - 1) return true;

		index++;
	}

	let previousElement, currentElement;

	for (let i = index + 1; i < array.length; i++) {
		previousElement = array[i - 1];
		currentElement = array[i];
		if (increasing && previousElement > currentElement) return false;
		if (decreasing && previousElement < currentElement) return false;
	}

	return true;
};

// empty array
console.log(isMonotonic([])); // true

// 1-element array
console.log(isMonotonic([0])); // true
console.log(isMonotonic([1])); // true

// strictly increasing array
console.log(isMonotonic([1, 2])); // true
console.log(isMonotonic([1, 2, 3])); // true
console.log(isMonotonic([1, 2, 3, 4])); // true
console.log(isMonotonic([1, 2, 3, 4, 5])); // true

// strictly decreasing array
console.log(isMonotonic([2, 1])); // true
console.log(isMonotonic([3, 2, 1])); // true
console.log(isMonotonic([4, 3, 2, 1])); // true
console.log(isMonotonic([5, 4, 3, 2, 1])); // true

// array with adjacent duplicates
console.log(isMonotonic([1, 1, 2])); // true
console.log(isMonotonic([1, 2, 2])); // true
console.log(isMonotonic([2, 2, 1])); // true
console.log(isMonotonic([2, 1, 1])); // true

// array with separated duplicates
console.log(isMonotonic([1, 1, 2, 3, 3])); // true
console.log(isMonotonic([3, 3, 2, 1, 1])); // true
console.log(isMonotonic([1, 2, 2, 3, 4, 4])); // true
console.log(isMonotonic([4, 3, 3, 2, 1, 1])); // true

// all elements of the same value
console.log(isMonotonic([1, 1])); // true
console.log(isMonotonic([1, 1, 1])); // true
console.log(isMonotonic([1, 1, 1, 1])); // true
console.log(isMonotonic([1, 1, 1, 1, 1])); // true

// Examples that return false
console.log(isMonotonic([2, 1, 3])); // false
console.log(isMonotonic([4, 2, 8])); // false
console.log(isMonotonic([8, 2, 4])); // false
console.log(isMonotonic([2, 3, 1])); // false
console.log(isMonotonic([8, 2, 4, 2])); // false
console.log(isMonotonic([1, 2, 3, 1, 2, 3])); // false
console.log(isMonotonic([3, 2, 1, 3, 2, 1])); // false
console.log(isMonotonic([2, 2, 2, 1, 4, 5])); // false
