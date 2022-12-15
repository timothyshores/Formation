const mergeSort = (arr) => {
	if (arr.length < 2) return arr;

	const middleIndex = Math.floor(arr.length / 2);
	const leftHalf = arr.slice(0, middleIndex);
	const rightHalf = arr.slice(middleIndex, arr.length);

	return merge(mergeSort(leftHalf), mergeSort(rightHalf));
};

const merge = (left, right) => {
	const mergedArray = [];

	let leftPointer = 0;
	let rightPointer = 0;

	while (leftPointer < left.length && rightPointer < right.length) {
		if (left[leftPointer] <= right[rightPointer]) {
			mergedArray.push(left[leftPointer]);
			leftPointer++;
		} else {
			mergedArray.push(right[rightPointer]);
			rightPointer++;
		}
	}

	while (leftPointer < left.length) {
		mergedArray.push(left[leftPointer]);
		leftPointer++;
	}

	while (rightPointer < right.length) {
		mergedArray.push(right[rightPointer]);
		rightPointer++;
	}

	return mergedArray;
};

// Test Cases
console.log(mergeSort([])); // []
console.log(mergeSort([1])); // [1]
console.log(mergeSort([3, 1, 2, 4])); // [1, 2, 3, 4]
console.log(mergeSort([-10, 1, 3, 8, -13, 32, 9, 5])); // [-13, -10, 1, 3, 5, 8, 9, 32]
