function numUniques(array) {
	let elementsMap = {};

	for (let element of array) {
		if (elementsMap[element]) {
			elementsMap[element] += 1;
		} else {
			elementsMap[element] = 1;
		}
	}

	return Object.values(elementsMap).filter((el) => el === 1).length;
}

// Test Cases
console.log(numUniques([])); // 0
console.log(numUniques([1])); // 1
console.log(numUniques([1, 2])); // 2
console.log(numUniques([1, 2, 1])); // 1
console.log(numUniques([1, 2, 1, 2])); // 0
console.log(numUniques([1, 2, 1, 2, 3])); // 1
console.log(numUniques([1, 2, 1, 2, 3, 4])); // 2
console.log(numUniques([3, 4, 1, 2, 1, 2])); // 2
console.log(numUniques([3, 1, 1, 2, 3, 1, 1, 1, 4])); // 2
