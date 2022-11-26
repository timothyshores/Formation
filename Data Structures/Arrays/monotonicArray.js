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

	while (array[0] !== array[index] && index < array.length) {
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
