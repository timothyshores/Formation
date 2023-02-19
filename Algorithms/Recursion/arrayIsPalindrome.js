// Prompt: Check if an array of integers is a palindrome

// Compare first and last elements
// If they are the same then move the pointers inward one index
// Continue moving points in until we finish comparing the final middle elements
// If values are unequal return false

const isPalindrome = (arr) => {
	if (arr.length < 2) return true;
	if (arr.shift() !== arr.pop()) return false;
	return isPalindrome(arr);
};

// All test cases return true
console.log(isPalindrome([]));
console.log(isPalindrome([1]));
console.log(isPalindrome([1, 1]));
console.log(!isPalindrome([1, 2]));
console.log(isPalindrome([1, 1, 1]));
console.log(isPalindrome([1, 2, 1]));
console.log(isPalindrome([2, 1, 2]));
console.log(!isPalindrome([1, 2, 3]));
console.log(isPalindrome([1, 2, 3, 2, 1]));
console.log(isPalindrome([3, 2, 1, 2, 3]));
