const testData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const k = 3;

// Print out every value
const printArray = (array) => {
	for (let element of array) {
		console.log(element);
	}
};

printArray(testData); // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

// Print out every other value
const printEveryOtherValue = (array) => {
	for (let i = 0; i < array.length; i += 2) {
		console.log(array[i]);
	}
};

printEveryOtherValue(testData); // 0, 2, 4, 6, 8, 10

// Print out every other value, skipping the first one
const printEveryOtherValueSkipFirst = (array) => {
	for (let i = 1; i < array.length; i += 2) {
		console.log(array[i]);
	}
};

printEveryOtherValueSkipFirst(testData); // 1, 3, 5, 7, 9

// Add a second parameter, k, and now print out every kth value, starting with the first.
const printEveryKth = (array, k) => {
	for (let i = 0; i < array.length; i += k) {
		console.log(array[i]);
	}
};

printEveryKth(testData, k); // 0, 3, 6, 9

// Every element starting with the last
const printReverse = (array) => {
	for (let i = array.length - 1; i >= 0; i--) {
		console.log(array[i]);
	}
};

printReverse(testData); // 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0

// Every other element starting with the last index
const printReverseEveryOtherValue = (array) => {
	for (let i = array.length - 1; i >= 0; i -= 2) {
		console.log(array[i]);
	}
};

printReverseEveryOtherValue(testData); // 10, 8, 6, 4, 2, 0

// Every other element skipping the last index
const printReverseEveryOtherValueSkipLast = (array) => {
	for (let i = array.length - 2; i >= 0; i -= 2) {
		console.log(array[i]);
	}
};

printReverseEveryOtherValueSkipLast(testData); // 9, 7, 5, 3, 1

// Every kth element starting with the last
const printReverseEveryKth = (array, k) => {
	for (let i = array.length - 1; i >= 0; i -= k) {
		console.log(array[i]);
	}
};

printReverseEveryKth(testData, k); // 10, 7, 4, 1
