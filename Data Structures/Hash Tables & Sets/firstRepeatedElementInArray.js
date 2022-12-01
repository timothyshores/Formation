// Prompt
// Given an array, return the first element is repeated if you were to traverse the array from left to right.

// function
//  Runtime
// Expected Time: O(N) to iterate through the length N list optimally otherwise O(n2) to loop through the length N array for each N index
// Expected Space: O(N) to track the array elements
// Examples
// print(firstRepeatedElement([1, 2, 3, 2, 1, 1]) == 2)

/**
 * @param {number[]} input
 * @return {number}
 */
const firstRepeatedElement = (input) => {
	const set = new Set();

	for (const num of input) {
		if (set.has(num)) {
			return num;
		} else {
			set.add(num);
		}
	}

	return null;
};

// empty array
console.log(firstRepeatedElement([]) === null); // true

// 1-element array
console.log(firstRepeatedElement([1]) === null); // true

// 2-element array
console.log(firstRepeatedElement([1, 2]) === null); // true

// 2-element array with duplicate
console.log(firstRepeatedElement([1, 1]) === 1); // true

// array with multiple duplicates
console.log(firstRepeatedElement([1, 2, 2]) === 2); // true
console.log(firstRepeatedElement([1, 2, 3, 3]) === 3); // true
console.log(firstRepeatedElement([1, 2, 3, 3, 4]) === 3); // true
console.log(firstRepeatedElement([1, 2, 3, 4, 4]) === 4); // true
console.log(firstRepeatedElement([1, 1, 2, 3, 4]) === 1); // true
console.log(firstRepeatedElement([1, 2, 2, 3, 4]) === 2); // true

// array with an element repeating multiple times
console.log(firstRepeatedElement([1, 2, 2, 3, 3]) === 2); // true
console.log(firstRepeatedElement([1, 1, 2, 3, 3]) === 1); // true
console.log(firstRepeatedElement([1, 1, 2, 2, 3]) === 1); // true
