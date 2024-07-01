/*

❓ PROMPT
Given a string, insert a star (*) between each character using a recursive method.

Example(s)
addStars("") == ""
addStars("a") == "a"
addStars("A") == "A"
addStars("1") == "1"
addStars("ab") == "a*b"
addStars("AB") == "A*B"
addStars("11") == "1*1"
addStars("**") == "***"
addStars("abc") == "a*b*c"
addStars("hello") == "h*e*l*l*o"

🔎 EXPLORE
List your assumptions & discoveries:

Recieves a string input parameter and returns ever character with a * between 2 characters
If string is empty return empty string
If string is 1 character return 1 character
If string has 2 characters add a * between the first and second character then check the remaining characters
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1: Recursive
Time: O(N) 
Space: O(N) 

Where N is the number of elements in the input string
 

📆 PLAN
Outline of algorithm #: 1

Base Case
Word is empty or single character return the string

Recursive Case
Return the first character + * + recursively call the function on the rest of the string

*/

// Initial solution
const addStars1InitialSolution = (word) => {
  if (word.length < 2) {
    return word;
  } else {
    return word[0] + "*" + addStars(word.substring(1));
  }
};

// Ternary with string template literals
const addStarsTernaryString = (word) =>
  word.length < 2 ? word : `${word[0]}*${addStars(word.substring(1))}`;

const addStars = (word) => {
  if (word.length < 2) return word;

  let result = "";
  const lastCharIndex = word.length - 1;

  const helper = (index) => {
    result += word[index];
    if (index === lastCharIndex) return;
    result += "*";
    helper(index + 1);
  };

  helper(0);
  return result;
};

console.log(addStars("") == "");
console.log(addStars("a") == "a");
console.log(addStars("ab") == "a*b");
console.log(addStars("abc") == "a*b*c");
console.log(addStars("1234") == "1*2*3*4");
console.log(addStars("3.14") == "3*.*1*4");
console.log(addStars("hello") == "h*e*l*l*o");
console.log(addStars("Chocolate") == "C*h*o*c*o*l*a*t*e");
