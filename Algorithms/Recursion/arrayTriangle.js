/*

Use recursion to print an upside-down triangle of *X*s with a starting length k and tapering by 2 on subsequent levels. There should be the correct amount of leading spaces on each level. You can assume k will always be odd and positive.

EXAMPLE(S)
printXTriangle(7); 
XXXXXXX
 XXXXX
  XXX
   X 

printXTriangle(5)
XXXXX
 XXX
  X

printXTriangle(3); 
XXX
 X

printXTriangle(1); 
X

Follow-up: Instead of being given an integer k, you're given an array of characters of odd length and must follow the same pattern of printing the triangle while using the array contents.  There should be the correct amount of leading spaces on each level. You can assume the array will always be odd and not None.

printTriangle([a,b,c,d,e])
abcde
 bcd
  c

printTriangle([t,a,c,o,c,a,t]); 
tacocat
 acoca
  coc
   o

*/

function printXTriangle(target, whiteSpace = 0) {
	if (target < 0) {
		return;
	}
	let triangleLayer = [];

	for (let i = 0; i < target; i++) {
		triangleLayer.push("x");
	}

	for (let i = 0; i < whiteSpace; i++) {
		triangleLayer.unshift(" ");
		triangleLayer.push(" ");
    }
    
	console.log(triangleLayer.join(""));##

	return printXTriangle(target - 2, whiteSpace + 1);
}

printXTriangle(7);
printXTriangle(5);
printXTriangle(3);
printXTriangle(1);

/**
 *
 *  tacocat
 *   acoca
 *    coc
 *     o
 */

const printArrayTriangle = (arr) => {
	const halfwayPoint = Math.floor(arr.length / 2);

	const helper = (index = 0) => {
		if (index > halfwayPoint) return;

		const whiteSpace = " ".repeat(index);
		const letters = arr.slice(index, arr.length - index).join("");

		console.log(whiteSpace + letters + whiteSpace);

		helper(index + 1);
	};

	helper();
};

printArrayTriangle(["l", "o", "l"]);
// lol
//  o

printArrayTriangle(["t", "a", "c", "o", "c", "a", "t"]);
// tacocat
//  acoca
//   coc
//    o

printArrayTriangle(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"]);
// abcdefghijk
//  bcdefghij
//    cdefghi
//     defgh
//      efg
//       f
