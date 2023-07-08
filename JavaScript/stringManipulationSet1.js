// Test driver
function test(...tests) {
	const results = [["passed", "actual", "expected"]];
	for (const [actual, expected] of tests) {
		const a = JSON.stringify(actual);
		const e = JSON.stringify(expected);
		results.push([a === e, a, a === e ? "-" : e]);
	}
	console.log(results);
}

/* PROBLEM 1
  Determine if a string is plural or not. That is, does it end
  with the letter 's'? Yes, we are only dealing with the simples
  case in the English language. Characters might be upper or
  lower case.
*/

const isPlural = (word) =>
	word.length ? word[word.length - 1].toLowerCase() === "s" : 0;

test(
	[isPlural(""), false],
	[isPlural("goose"), false],
	[isPlural("geese"), false],
	[isPlural("foxes"), true],
	[isPlural("otters"), true],
	[isPlural("OTTERS"), true]
);

/* PROBLEM 2
  Write a function that finds the word 'Nemo' in some text. If
  Nemo is found, return a string like "Nemo is word 4", where
  the number is the ordinal position, not the index. For example:
  "On a quest to rescue Nemo" returns "Nemo is word 6". If Nemo is
  not found, return "I can't find Nemo!"

  The input text will only contain alphabetic characters, no punctuation.
*/

const findNemo = (text) => {
	const ordinalPosition = text.split(" ").indexOf("Nemo") + 1;

	return ordinalPosition
		? `Nemo is word ${ordinalPosition}`
		: "I can't find Nemo!";
};

test(
	[findNemo("This quest is fruitless"), "I can't find Nemo!"],
	[findNemo("On a quest to find Nemo"), "Nemo is word 6"],
	[findNemo("Nemo is not an otter"), "Nemo is word 1"]
);

/* PROBLEM 3
  Write a function that takes a string representation of a float
  and removes leading and trailing zeros that have no effect on
  the value. For example:

  "0011.2200" -> "11.22"
*/

const removeZeros = (f) => parseFloat(f).toString();

test(
	[removeZeros("0011.2200"), "11.22"],
	[removeZeros("0123.4560"), "123.456"],
	[removeZeros(".456000"), "0.456"],
	[removeZeros("0.456000"), "0.456"],
	[removeZeros("030"), "30"]
);

/* PROBLEM 4
  Create a string that consists of a given string repeated the
  specified number of times, separated by a space. The count will be
  greater than or equal to zero.
*/

function repetition(word, count) {
	// YOUR CODE HERE
}

// test(
//   [repetition("otter", 0), ""],
//   [repetition("otter", 3), "otter otter otter"],
// );

/* PROBLEM 5
  Write a function to convert an array of strings in percent notation
  to an array of decimal (floating point) values. For example:
  ["10%"] returns [.1].

  The input string will always be well formed.
*/

function percentToDecimal(percentages) {
	// WRITE YOUR CODE
}

// test(
//   [percentToDecimal([]), []],
//   [percentToDecimal(["10%", "50.2%"]), [.1, .502]],
//   [percentToDecimal(["12.31%", "76.42%", "1%"]), [.1231, .7642, .01]],
//   [percentToDecimal(["33%", "98.1%", "56.44%", "100%"]), [.33, .981, .5644, 1]],
// );
