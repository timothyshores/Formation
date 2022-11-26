const insertionSort = (inputArr) => {
	let n = inputArr.length;
	for (let i = 1; i < n; i++) {
		let current = inputArr[i];
		let j = i - 1;
		while (j > -1 && current < inputArr[j]) {
			inputArr[j + 1] = inputArr[j];
			j--;
		}
		inputArr[j + 1] = current;
	}
	return inputArr;
};

// // Test Cases
console.log(insertionSort([])); // []
console.log(insertionSort([1])); // [1]
console.log(insertionSort([3, 1])); // [1, 3]
console.log(insertionSort([3, 1, 2])); // [1, 3]
console.log(insertionSort([3, 1, 2, 4])); // [1, 2, 3, 4]
console.log(insertionSort([-10, 1, 3, 8, -13, 32, 9, 5])); // [-13, -10, 1, 3, 5, 8, 9, 32]
