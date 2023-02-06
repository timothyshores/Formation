// Prompt: Given an integer array and an integer, find whether the integer exists in the array.Return a boolean.

const arrayContains = (arr, value) => {
	let contains;

	const helper = (index = 0) => {
		if (index === arr.length) {
			contains = false;
			return;
		}
		if (arr[index] === value) {
			contains = true;
			return;
		}
		helper(index + 1);
	};

	helper();
	return contains;
};

// All test cases return true
console.log(!arrayContains([], 0));
console.log(!arrayContains([], 1));
console.log(!arrayContains([], 2));
console.log(arrayContains([1], 1));
console.log(!arrayContains([1], 0));
console.log(arrayContains([-1], -1));
console.log(!arrayContains([1], -1));
console.log(!arrayContains([-1], 1));
console.log(arrayContains([1, 2], 1));
console.log(arrayContains([1, 2], 2));
console.log(!arrayContains([1, 2], 3));
console.log(!arrayContains([1, 2], 0));
console.log(arrayContains([1, 2, 3], 1));
console.log(arrayContains([1, 2, 3], 2));
console.log(arrayContains([1, 2, 3], 3));
console.log(!arrayContains([1, 2, 3], 0));
console.log(!arrayContains([1, 2, 3], 4));
