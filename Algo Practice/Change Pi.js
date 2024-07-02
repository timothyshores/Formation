/*

❓ PROMPT
Given a string, compute recursively (no loops) a new string where all appearances of "pi" have been replaced by "3.14".

Example(s)
changePi("xpix") == "x3.14x"
changePi("pipi") == "3.143.14"
changePi("pip") == "3.14p"
 

🔎 EXPLORE
List your assumptions & discoveries:
- Replace every occurance of "pi" with 3.14
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1: Recursion
Time: O(N)
Space: O(N) where N is the number of characters passed into the input string
 
📆 PLAN
Outline of algorithm #: 1

Initialize a results variable to the empty string

Initialize a helper function that recieves an index variable

  Base Case:
    Index is word.length - 1 || index is word.length
    Concatinate the last character in word to results and return to exit helper function

  Recursive Case:
      If the the first character is 'p' and the next character is 'i' 
        Add "3.14" to the results string
        Recursively call the helper function incrementing the index + 2

      Else the first two characters are NOT 'pi'
        Concatinate the first character to the end of the results string
        Recursively call the helper function incrementing the index + 1

Call the helper function at index 0
Return results variable
 
🧪 VERIFY
Run tests. Methodically debug & analyze issues.

*/

const changePi = (word) => {
  let result = "";

  const helper = (index) => {
    if (index === word.length) return;

    if (word.substring(index, index + 2) === "pi") {
      result += "3.14";
      helper(index + 2);
    } else {
      result += word[index];
      helper(index + 1);
    }
  };

  helper(0);
  return result;
};

// All test cases return true
console.log(changePi("") == "");
console.log(changePi("p") == "p");
console.log(changePi("x") == "x");
console.log(changePi("pi") == "3.14");
console.log(changePi("hip") == "hip");
console.log(changePi("pip") == "3.14p");
console.log(changePi("xpix") == "x3.14x");
console.log(changePi("pixx") == "3.14xx");
console.log(changePi("xyzzy") == "xyzzy");
console.log(changePi("pipi") == "3.143.14");
