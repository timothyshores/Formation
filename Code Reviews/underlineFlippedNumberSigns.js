/* 

You're holding a silent auction with 650 bidders, assigning each bidder a numbered sign between 1-650. A person raises their sign when they want to make an offer.

However, they sometimes hold the sign upside-down, and the auctioneer
mistakes their number for a different number. For example, bidder #6 
raises their sign upside-down and could be mistaken for bidder #9.

Write a function that underlines all numbers from 1-650 that can be
misinterpreted for another number within that range when rotated 180 degrees.

EXAMPLES
The number 6 should be underlined because it can be misinterpreted for the number 9 and vice versa.

Algorithm outline
- It's easier to rule out which numbers not to underline over time. Then, the only numbers remaining after all the filtering rules are the ones that should be underlined.
- Assuming that 1, 8, and 0 are themselves when flipped, 6 flips to 9, 9 flips to 6, and 2, 3, 4, 5, and 7 are invalid when flipped, the rules to filter out numbers are as follows:
- Exclude numbers with non-flippable digits
- Exclude numbers that are divisible by 10
- Exclude numbers that equal themselves when flipped
- Exclude numbers that are above the upper bound

*/

// Get the corresponding rotated digit for a given digit
const rotateMap = {
	0: "0",
	1: "1",
	6: "9",
	8: "8",
	9: "6",
};

// Return the value of the rotated number (Imperative)
const rotateNumberImperative = (num) => {
	const numStr = num.toString();
	let rotatedStr = "";
	for (let i = numStr.length - 1; i >= 0; i--) {
		rotatedStr += rotateMap[numStr[i]];
	}

	return parseInt(rotatedStr);
};

// Check if a number contains non-flippable digits (Imperative)
const containsNonFlippableDigitsImperative = (num) => {
	const numStr = num.toString();
	for (let i = 0; i < numStr.length; i++) {
		const digit = numStr[i];
		if (!rotateMap[digit]) return true;
	}
	return false;
};

// Find mistaken numbers within a given upper bound (Imperative)
const underlineMistakenNumbersImperative = (upperBound) => {
	const mistakenNumbers = [];

	for (let num = 1; num <= upperBound; num++) {
		if (containsNonFlippableDigitsImperative(num)) continue;
		if (num % 10 === 0) continue;
		const rotatedNum = rotateNumberImperative(num);
		if (num === rotatedNum) continue;
		if (rotatedNum > upperBound) continue;
		mistakenNumbers.push(num);
	}

	return mistakenNumbers;
};
