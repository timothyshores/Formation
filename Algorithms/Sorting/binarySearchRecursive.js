const binarySearchRecursive = (
	arr,
	target,
	start = 0,
	stop = arr.length - 1,
	index = 0
) => {
	let midPoint = Math.floor((stop - start) / 2 + start);

	switch (true) {
		case arr[midPoint] === target:
			return midPoint;
		case stop - start === 0:
			return -1;
		case arr[midPoint] < target:
			return binarySearchRecursive(
				arr,
				target,
				midPoint + 1,
				stop,
				index + midPoint
			);
		case arr[midPoint] > target:
			return binarySearchRecursive(arr, target, start, midPoint, index);
	}
};

console.log(binarySearchRecursive([1], 1) === 0);
console.log(binarySearchRecursive([0, 1], 1) === 1);
console.log(binarySearchRecursive([0, 1, 2], 1) === 1);
console.log(binarySearchRecursive([0, 1, 2], 2) === 2);
console.log(binarySearchRecursive([0, 1, 2, 3], 3) === 3);
console.log(binarySearchRecursive([0, 1, 2, 3, 4], 3) === 3);
console.log(binarySearchRecursive([0, 1, 2, 3, 4], 5) === -1);
console.log(binarySearchRecursive([0, 1, 2, 3, 4], -1) === -1);
console.log(binarySearchRecursive([0, 1, 2, 3, 4, 5], 5) === 5);
console.log(binarySearchRecursive([], 0) === undefined);
