// ❓ PROMPT: Sum all the elements in an array.

const sumArray = (arr) => {
	let sum = 0;

	const helper = (index = 0) => {
		if (index === arr.length) return;
		sum += arr[index];
		helper(index + 1);
	};

	helper();
	return sum;
};

// All test cases return true
console.log(sumArray([]) === 0);
console.log(sumArray([1]) === 1);
console.log(sumArray([-1]) === -1);
console.log(sumArray([1, 2]) === 3);
console.log(sumArray([-1, 2]) === 1);
console.log(sumArray([1, -2]) === -1);
console.log(sumArray([-1, -2]) === -3);
console.log(sumArray([1, 2, 3]) === 6);
console.log(sumArray([3, 2, 1]) === 6);
