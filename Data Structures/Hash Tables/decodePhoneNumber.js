// Businesses like to make phone numbers that have meaning with English characters but it's hard for users to convert the letter to numbers when dialing. For example, 1-800-U-B-SMART becomes 1-800-8-2-76278 because 8 corresponds to T, U, and V so the U becomes 8, 2 corresponds to A, B, and C so the B becomes 2, and so on according to a phone's dial pad.

// Write a function that converts the English letters to their digit equivalent while preserving the formatting.The dial pad mapping in both directions has been provided for your convenience.

// Expected Runtime
// Time: O(n), where n is the length of the text
// Space: O(n), to store the answer in a new string

const letterToDigit = {
	A: "2",
	B: "2",
	C: "2",
	D: "3",
	E: "3",
	F: "3",
	G: "4",
	H: "4",
	I: "4",
	J: "5",
	K: "5",
	L: "5",
	M: "6",
	N: "6",
	O: "6",
	P: "7",
	Q: "7",
	R: "7",
	S: "7",
	T: "8",
	U: "8",
	V: "8",
	W: "9",
	X: "9",
	Y: "9",
	Z: "9",
};

const decodePhoneNumber = (text) => {};

// Examples
console.log(decodePhoneNumber("555-U-HUNGRY!") == "555-8-486479!"); // true
console.log(decodePhoneNumber("1-888-GET-RICH") == "1-888-438-7424"); // true
console.log(decodePhoneNumber("1-800-U-B-SMART") == "1-800-8-2-76278"); // true
console.log(decodePhoneNumber("1.800.I.C.BUTTS") == "1.800.4.2.28887"); // true
