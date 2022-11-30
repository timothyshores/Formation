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
