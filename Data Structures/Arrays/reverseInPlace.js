// Problem Statement: Write a function that takes an array and reverses its elements in place. Do not use built-in methods and do not create another array

// Expected Runtime: O(N) to iterate through the length N array
// Space Complexity: O(1) to reverse in-place. Creating a new array is O(N) so try in-place.

// Example
// print(reverse([1, 2, 3, 4, 5]) == [5, 4, 3, 2, 1]);

const reverse = (array) => {
	// If array is empty or has one element return the array
	if (array.length < 2) return array;

	let start = 0;
	let end = array.length - 1;

	while (start < end) {
		[array[start], array[end]] = [array[end], array[start]];
		start++;
		end--;
	}

	return array;
};

console.log(reverse([])); //
console.log(reverse([5])); // [5]
console.log(reverse([5, 10])); // [10, 5]
console.log(reverse([5, 10, 15])); // [15, 10, 5]
console.log(reverse([5, 10, 15, 20])); // [20, 15, 10, 5]
console.log(reverse([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
