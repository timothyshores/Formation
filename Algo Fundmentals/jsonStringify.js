/*

❓ PROMPT
You will be implementing a function called stringify which will take in a Javascript Object and return the JSON representation of the object as a string.
This function is actually built into Javascript as `JSON.stringify(object)` but you have to write yours from scratch!

You may want to take a moment to review the rules for [JSON syntax](https://www.w3schools.com/js/js_json_syntax.asp).

Example(s)

Examples:
- Input: {"x": 5, "y": "Oliver"}
  Output: '{"x": 5, "y": "Oliver"}'

- Input: [1, "hello", "null", {"x": 5, "y": "Oliver"}]
  Output: '[1, "hello", "null", {"x": 5, "y": "Oliver"}]'

A brief note about the input and output. They look very similar, but the input is an object and the output is a string enclosed in single ticks. This means that the double quotes inside that string are characters in the string and are important.
 
🔎 EXPLORE
List your assumptions & discoveries:

Want to iterate over all key value pairs
Input can be either objects or arrays
- Objects should be wrapped in {}
- Arrays should be wrapped in []
Objects and or arrays can be nested within each other
Output will be wrapped in quotes to return as a string

Insightful & revealing test cases:

Empty objects and arrays
stringify({}) // '{}'
stringify([]) // '[]'

Objects and arrays with single entry
stringify({1: 'a'}) // '{}'
stringify([1]) // '[1]'
stringify(['a']) // '['a']'

Flat Objects and Arrays
stringify([1, 2, 3]) // '[1, 2, 3]'
stringify(['a', 'b', 'c']) // '['a', 'b', 'c']'
stringify({"x": 5, "y": "Oliver"}) // '{"x": 5, "y": "Oliver"}'

Nested objects and arrays
stringify([1, "hello", "null", {"x": 5, "y": "Oliver"}]) // '[1, "hello", "null", {"x": 5, "y": "Oliver"}]'
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1: Recursion
Time: O(N) where N is the number of elements within the object
Space: O(N) where N is the number of elements within the object
 

📆 PLAN
Outline of algorithm #: 1

Create an empty string to return the result

Determine if the input object is either an object or an array
- If input is array
    - Add '[' to the start of the string
    - Loop through all elements of the array 
        - If current element is a primative data type e.g. string, number, boolean, etc.
            - Add the current element to the string
        - If the current element is an object or an array
            - Call the helper function for the object or array
    - Add ']' to the end of the string
 - If input is array
    - Add '[' to the end of the string
    - Loop through all key value pairs in the object
    - Add '}' to the end of the string

Return the resulting string

*/

const formatArray = (arr) => {
  const parts = [];

  for (const val of arr) {
    parts.push(stringify(val));
  }

  return `[${parts.join(", ")}]`;
};

const formatObject = (obj) => {};

const stringify = (obj) => {
  if (obj === null) return null;
  if (typeof obj === "string" || obj instanceof String) return `"${obj}"`;
  if (typeof obj === "number") return `${obj}`;
  if (Array.isArray(obj)) return formatArray(obj);

  const parts = [];

  for (const [key, value] of Object.entries(obj)) {
    parts.push(`"${key}": ${stringify(value)}`);
  }

  return `{${parts.join(", ")}}`;
};


