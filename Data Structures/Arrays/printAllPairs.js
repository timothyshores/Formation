const printAllPairs = (arr) => {
	if (arr.length < 2) return;

	// Pointer 1 position
	for (let i = 0; i < arr.length - 1; i++) {
		// Pointer 2 position
		for (let j = i + 1; j < arr.length; j++) {
			console.log(`${arr[i]} ${arr[j]}`);
		}
	}
};

printAllPairs([]);
// no output

printAllPairs([5]);
// no output

printAllPairs([1, 2, 3]);
// 1 2
// 1 3
// 2 3

printAllPairs([1, 2, 3, 4]);
// 1 2
// 1 3
// 1 4
// 2 3
// 2 4
// 3 4

printAllPairs([1, 2, 3, 4, 5]);
// 1 2
// 1 3
// 1 4
// 1 5
// 2 3
// 2 4
// 2 5
// 3 4
// 3 5
// 4 5

printAllPairs([5, 8, 5, 8]);
// 5 8
// 5 5
// 5 8
// 8 5
// 8 8
// 5 8
