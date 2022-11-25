// Write a function that receives an array of names and returns a string where the names are separated by a comma separated except for the last two pair, which should be separated with the word "and". We don't want an Oxford comma, so given ["Sam", "Grant", "Jenny"], return "Sam, Grant and Jenny".

// Expected Runtime: O(N) to iterate through N names in the string
// Expected space complexity: O(N) to store the N names in the resulting string

const commaSeparate = (arr) => {};

console.log(commaSeparate([]) == "");

console.log(commaSeparate(["Sophie"]) == "Sophie");

console.log(commaSeparate(["Daniel", "Craig"]) == "Daniel and Craig");
console.log(commaSeparate(["Daniel", "Craig"]) == "Daniel and Craig");
console.log(
	commaSeparate(["Sam", "Grant", "Jenny"]) === "Sam, Grant and Jenny"
);
console.log(
	commaSeparate(["Oliver", "Pixel", "Fido"]) == "Oliver, Pixel and Fido"
);
console.log(
	commaSeparate(["Jono", "Paavo", "Tony", "me"]) == "Jono, Paavo, Tony and me"
);
console.log(commaSeparate(["John", "John", "John"]) == "John, John and John");
console.log(commaSeparate(["Sean", "John", "Sean"]) == "Sean, John and Sean");
