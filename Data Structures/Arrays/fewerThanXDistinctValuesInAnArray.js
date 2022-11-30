// Given an array and a target count X, return true if there are less than X distinct values in the array. For example, given [1, 2, 2, 3, 3] and 4, return true because there are only 3 distinct values 1, 2, and 3.

// Expected Time Complexity: O(N) to iterate through the length N array
// Expected Space Complexity: O(N) to store up to N elements

// Examples
// [1, 2, 2, 3, 3], 3 => false (there are exactly 3 distinct values)
// [1, 2, 2, 3, 4], 3 => false (there are 4 distinct values)
// [1, 1, 2, 2, 2], 3 => true (there are exactly 3 distinct values)

const fewerThanTargetDistinct = (arr, target) => {
	let set = new Set();

	for (num of arr) {
		set.add(num);
	}

	return set.size < target;
};

// Test cases

// empty array
console.log(fewerThanTargetDistinct([], 1)); // true (when array is empty there are 0 distinct values in the array)

// 1-element array
console.log(fewerThanTargetDistinct([1], 1)); // false (there's one distinct element)
console.log(fewerThanTargetDistinct([1], 2)); // true (there's one distinct element)

// array with < X distinct values
console.log(fewerThanTargetDistinct([1, 1, 2, 2, 2], 3)); // true(there are exactly 3 distinct values)

// array with == X distinct values
console.log(fewerThanTargetDistinct([1, 2, 2, 3, 3], 3)); // false (there are exactly 3 distinct values)

// array with > X distinct values
console.log(fewerThanTargetDistinct([1, 2, 2, 3, 4], 3)); // false (there are 4 distinct values)

// array longer than X but with < X distinct values
console.log(fewerThanTargetDistinct([1, 2, 3, 4, 5, 1, 2, 3, 4, 5], 6)); // true (5 distinct elements)
