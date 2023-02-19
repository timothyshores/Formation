/*

❓ PROMPT 
Given an array are a target value write a function that returns the array without the specified target value

Example(s)
console.log(removeElement([1], 1)); // []

🔎 EXPLORE
State your assumptions & discoveries:
· Want to return an array without the specific target value
· Similar to the built in .filter() method for arrays arr.filter(el => el !== targetValue);

🛠️ IMPLEMENT */
const removeElement = (arr, el) => {
	const removed = [];

	const helper = (index = 0) => {
		if (index === arr.length) return;
        if (arr[index] !== el) removed.push(arr[index]);
        helper(index + 1);
	};

	helper();
	return removed;
};

/* 
🧪 VERIFY
Run your examples & test cases.
Methodically analyze and debug issue(s).
*/

