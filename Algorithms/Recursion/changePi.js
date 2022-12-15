// Prompt
// Given a string, compute recursively (no loops) a new string where all appearances of "pi" have been replaced by "3.14".

// Expected Runtime
// Time: O(L) where L is the length of the string
// Space: O(L^2) where L is the length of the string to create a new stack frame for L characters and to create a new L length string from slicing on each frame.

// Examples
// changePi("xpix") == "x3.14x"
// changePi("pipi") == "3.143.14"
// changePi("pip") == "3.14p"

const changePi = (word) => {
	if (word === "") return "";

	// check if the first 2 letters are pi
	// if the first two letters are pi
	if (word.substring(0, 2) === "pi") {
		// return 3.14 and do string addition by calling the changePI function starting at the third character until the end of the string
		return "3.14" + changePi(word.substring(2));
	} else {
		// else the first two letters are NOT pi
		// return the first character of the string and do string addition by calling the changePi function starting at the second character until the end of the string
		return word.substring(0, 1) + changePi(word.substring(1));
	}
};

// Test Cases
console.log(changePi("") === ""); // true
console.log(changePi("p") === "p"); // true
console.log(changePi("i") === "i"); // true
console.log(changePi("pi") === "3.14"); // true
console.log(changePi("pii") === "3.14i"); // true
console.log(changePi("pip") === "3.14p"); // true
console.log(changePi("ip ip") === "ip ip"); // true
console.log(changePi("xpix") === "x3.14x"); // true
console.log(changePi("ppii") === "p3.14i"); // true
console.log(changePi("pipi") === "3.143.14"); // true
console.log(changePi("pi pi pi") === "3.14 3.14 3.14"); // true

console.log(
	changePi("strings without p i occurring") === "strings without p i occurring"
); // true

console.log(
	changePi("strings with pi occurring") === "strings with 3.14 occurring"
); // true
