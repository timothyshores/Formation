/*

Given an integer *maxLen*, print all binary strings of size *maxLen* that don't have 1s next to each other. That is, no string should contain the substring 11, 111, 1111, 11111, etc. You can assume *maxLen* > 0.

EXAMPLE(S)
printBinaryWithoutConsecutive1s(maxLen=2)
00
01
10

printBinaryWithoutConsecutive1s(maxLen=3)
000
001
010
100
101

*/

const printBinaryWithoutConsecutive1s = (maxLen) => {
	// binary string cannot be less than or equal to 1 char
	if (maxLen < 1) return;

	const helper = (string) => {
		if (string.length === maxLen) {
			console.log(string);
			return;
		}

		// only add 1 to the end of the current string if the last character is 0
		if (string[string.length - 1] === "0") helper(string + "1");

		helper(string + "0");
	};

	helper("0");
	helper("1");
};

printBinaryWithoutConsecutive1s(1);
// 0
// 1

printBinaryWithoutConsecutive1s(2);
// 00
// 01
// 10

printBinaryWithoutConsecutive1s(3);
// 000
// 001
// 010
// 100
// 101

printBinaryWithoutConsecutive1s(4);
// 0000
// 0001
// 0010
// 0100
// 0101
// 1000
// 1001
// 1010

printBinaryWithoutConsecutive1s(5);
// 00000
// 00001
// 00010
// 00100
// 00101
// 01000
// 01001
// 01010
// 10000
// 10001
// 10010
// 10100
// 10101
