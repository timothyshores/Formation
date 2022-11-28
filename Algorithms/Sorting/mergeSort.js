const mergeSort = (arr) => {
	if (arr.length < 2) return arr;

	const middleIndex = Math.floor(arr.length / 2);
	const leftHalf = arr.slice(0, middleIndex);
	const rightHalf = arr.slice(middleIndex, arr.length);

	return merge(mergeSort(leftHalf), mergeSort(rightHalf));
};

const merge = (left, right) => {
	const mergedArray = [];

	const addFirstElementFromTheLeftArrayThenRemove = () =>
		mergedArray.push(left.shift());

	const addFirstElementFromTheRightArrayThenRemove = () =>
		mergedArray.push(right.shift());

	while (left.length && right.length) {
		if (left[0] <= right[0]) {
			addFirstElementFromTheLeftArrayThenRemove();
		} else {
			addFirstElementFromTheRightArrayThenRemove();
		}
	}

	while (left.length) {
		addFirstElementFromTheLeftArrayThenRemove();
	}
	while (right.length) {
		addFirstElementFromTheRightArrayThenRemove();
	}

	return mergedArray;
};

// Test Cases

console.log(mergeSort([])); // []
console.log(mergeSort([1])); // [1]
console.log(mergeSort([3, 1, 2, 4])); // [1, 2, 3, 4]
console.log(mergeSort([-10, 1, 3, 8, -13, 32, 9, 5])); // [-13, -10, 1, 3, 5, 8, 9, 32]
