function bubbleSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		for (let j = 0; j < arr.length - 1; j++) {
			if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
		}
	}

	return arr;
}

// Test Cases
console.log(bubbleSort([])); // []
console.log(bubbleSort([1])); // [1]
console.log(bubbleSort([3, 1, 2, 4])); // [1, 2, 3, 4]
console.log(bubbleSort([-10, 1, 3, 8, -13, 32, 9, 5])); // [-13, -10, 1, 3, 5, 8, 9, 32]
