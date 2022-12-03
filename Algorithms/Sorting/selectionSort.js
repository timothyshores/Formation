function selectionSort(array) {
    let currentMinimumIndex, currentMinimumValue, currentItemIndex, currentItemValue;

    for (let i = 0; i < array.length; i++) {
        currentMinimumIndex = i;
        currentMinimumValue = array[currentMinimumIndex];

        for (let j = i; j < array.length; j++ ) {
            currentItemIndex = j;
            currentItemValue = array[currentItemIndex]

            if (currentItemValue < currentMinimumValue) {
                currentMinimumIndex = currentItemIndex;
                currentMinimumValue = currentItemValue
            }
        }
        // Swap the items
        [array[i], array[currentMinimumIndex]] = [array[currentMinimumIndex], array[i]];
	}

    return array;
}

// Test Cases
console.log(selectionSort([])); // []
console.log(selectionSort([1])); // [1]
console.log(selectionSort([3, 1, 2, 4])); // [1, 2, 3, 4]
console.log(selectionSort([-10, 1, 3, 8, -13, 32, 9, 5])); // [-13, -10, 1, 3, 5, 8, 9, 32]
