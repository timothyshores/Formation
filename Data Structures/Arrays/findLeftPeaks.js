/*

❓ PROMPT
Given an array of integers, return a sub-array of 'Left Peaks'. A Left Peak is defined as an element that is greater or equal in value to all elements to its right.

Example(s)
find_left_peaks([1, 2, 5, 3, 1, 2]) => [5, 3, 2]
find_left_peaks([3, 2, 1]) => [3, 2, 1]

🔎 EXPLORE
State your assumptions & discoveries:
Given an array of integers return an array of integers where every integer in the final array is larger than all elements to it's right in the input array

Create examples & test cases:

console.log(find_left_peaks([])); // []
console.log(find_left_peaks([0])); // [0]
console.log(find_left_peaks([1])); // [1]
console.log(find_left_peaks([-1])); // [-1]
console.log(find_left_peaks([0, 1])); // [1]
console.log(find_left_peaks([1, 0])); // [1, 0]
console.log(find_left_peaks([1, 2])); // [2]
console.log(find_left_peaks([2, 1])); // [2, 1]
console.log(find_left_peaks([1, 2, 3])); // [3]
console.log(find_left_peaks([3, 2, 1])); // [3, 2, 1]


🧠 BRAINSTORM
What approaches could work? Consider data structures or algorithmic patterns.
Analyze the space & time complexity.

Approach 1: 

Brute force approach at every element we check every element to it's right
If the current element is greater than all other elements to it's right then push it into the left peaks results array
Check each element one by one from the left most element at index 0 to the right most elements at index arr.length - 1
Return the final left peaks results array

Time: O(N^2) for the first element we need to check n - 1 elements to it's right then n - 2, n - 3, ...., 3, 2, 1, 0 elements
Space: O(N) only store the final left peaks results array in memory

Approach 2: Create another array that matches the input array arr and store the current maximum of all elements to it's right and compare to input array arr

Time: O(N) Technically 2N because we need to iterate through the input array in reverse but linear time is far better than quadratic time in brute force solution
Space: O(N) Need N space for the precomputed maximums from the right to the left in addition to the final left peaks array

📆 PLAN
High-level outline of approach #: 2

Create a new array that's the same size as the input array arr
Start at the right most index arr.length - 1 
Set this element to 0 because there are NO elements to the right of arr[arr.length - 1]
Move our pointer to the left by one index and look at index arr.length - 2
Set this value to the maximum of the original arr at index arr.length - 1 because this is the only element to the right of arr.length - 2
Repeat this process at arr.length - 3 and set it to the max of the element at arr.length - 2 or arr.length - 1 because these are the two elements to the right of arr.length - 3
Continue this process until we're at index 0 for the new array
Create a final left peaks array and initialize it to an empty array
Iterate through the original input array arr and compare this to our precomputed maximums from the right to the left
If the current element in the original input array arr is greater than it's related precomputed maximums array then push the current element into the final left peaks array
Return the final left peaks array

Make sure to handle smaller inputs like arr.length === 0, 1 & 2

🛠️ IMPLEMENT */
const find_left_peaks = (arr) => {
	// If arr is a single element return the input array
	if (arr.length === 1) return arr;

	// Initialize a new array to store the local maximums from all elements to it's right and set to the length of input array arr
	const maximums = Array(arr.length).fill();
	
    // Set right most index of maximums to -Infinity 
    maximums[arr.length - 1] = -Infinity;

    // Start from the second to last element at arr.length -2 and work backwards to left most index 0
    for (let i = arr.length - 2; i >= 0; i--) {
        // Set the current maximum to the previous maximum or the element to it's right in the input array arr
		maximums[i] = Math.max(maximums[i + 1], arr[i + 1]);
	}

    // Initialize a new empty array called leftPeaks
	const leftPeaks = [];

    // Iterate through input array arr
    for (let i = 0; i < arr.length; i++) {
        // If the current element is greater than all elements to it's right then push it into the leftPeaks array
		if (arr[i] > maximums[i]) leftPeaks.push(arr[i]);
	}

    // Return leftPeaks array 
	return leftPeaks;
};

/*

🧪 VERIFY
Run your examples & test cases.
Methodically analyze and debug issue(s).

*/
