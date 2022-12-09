const iterativeBinarySearch = (arr, target) => {
	let leftIndex = 0;
	let rightIndex = arr.length - 1;
	let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

	while (leftIndex <= rightIndex) {
		if (arr[middleIndex] === target) {
			return middleIndex;
		} else if (arr[middleIndex] > target) {
			rightIndex = middleIndex - 1;
		} else {
			leftIndex = middleIndex + 1;
		}
		middleIndex = Math.floor((leftIndex + rightIndex) / 2);
	}
	return -1;
};

console.log(iterativeBinarySearch([], 0) === -1);
console.log(iterativeBinarySearch([1], 1) === 0);
console.log(iterativeBinarySearch([0, 1], 1) === 1);
console.log(iterativeBinarySearch([0, 1, 2], 1) === 1);
console.log(iterativeBinarySearch([0, 1, 2], 2) === 2);
console.log(iterativeBinarySearch([0, 1, 2, 3], 3) === 3);
console.log(iterativeBinarySearch([0, 1, 2, 3, 4], 3) === 3);
console.log(iterativeBinarySearch([0, 1, 2, 3, 4], -1) === -1);
console.log(iterativeBinarySearch([0, 1, 2, 3, 4], 5) === -1);
console.log(iterativeBinarySearch([0, 1, 2, 3, 4, 5], 5) === 5);
