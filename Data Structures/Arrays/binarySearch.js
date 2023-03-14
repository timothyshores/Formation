// Array needs to be sorted in order to use binary search

// Say we want to determine if the number 100 exists inside the following array
// [3, 8, 12, 14, 14, 19, 23, 25, 50, 100, 101, 104, 494]

const binarySearch = (input, target) => {
	let min = 0;
	let max = input.length - 1;

	while (min <= max) {
		let middle = Math.floor((min + max) / 2);
		if (input[middle] === target) {
			return middle;
		} else if (input[middle] > target) {
			max = middle - 1;
		} else {
			min = middle + 1;
		}
	}

	return -1;
};
