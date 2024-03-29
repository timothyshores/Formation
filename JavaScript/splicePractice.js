const original = [
	{ name: "Oliver" },
	{ name: "Charlotte" },
	{ name: "Liam" },
	{ name: "Ava" },
	{ name: "Ethan" },
	{ name: "Olivia" },
];

const copy = [...original];
let temp = null;

/**
 * This is a quick exercise is in splicing arrays. You should only use the following
 * resource for help:
 *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
 *
 * 1. Create a copy of original and store it in copy.
 * 2. Using ONLY one or more ARRAY SPLICE operations, and the single temp variable above:
 *    a. move 'Ethan' to the front of the copy
 *    b. then, move 'Oliver' to the end of the copy.
 * 3. Confirm in the console.log below that your operations worked
 * 4. Make sure that the original looks the same as above in the logs
 */

console.log(
	"original\n",
	original,
	"\n",
	"\n1. Create a copy of original and store it in copy.\n",
	copy
);
console.log(
	"\n2. Using ONLY one or more ARRAY SPLICE operations, and the single temp variable above:"
);

console.log("a. move 'Ethan' to the front of the copy");
copy.splice(0, 0, { name: "Ethan" });

console.log("b. then, move 'Oliver' to the end of the copy");
temp = copy.splice(1, 1);
copy.push(...temp);

console.log(
	"\n3. Confirm in the console.log below that your operations worked\n",
	copy
);
console.log(
	"\nMake sure that the original looks the same as above in the logs\n",
	original
);
