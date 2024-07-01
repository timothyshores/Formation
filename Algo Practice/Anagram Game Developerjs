/*

❓ PROMPT
An anagram is a word formed by rearranging the letters of another word using all the original letters exactly once. For example, the words 'opts', 'post', 'pots', 'spot', 'stop', and 'tops' are all anagrams of each other.

A game developer is creating an online, competitive anagram game where friends can play against each other. The game's objective is to create as many anagrams as possible from a random string shown on the screen. Given the challenge word, 'displayedWord', and the user input, 'userWord', determine if the user inputs a valid anagram. What would your algorithm look like using built-in functions to simplify the implementation, how about without?

As a follow-up, the game developer wants to create a custom anagram dictionary in memory to speed up their game performance by getting the list of anagrams for a word in less than O(N) time, where N is the length of the word list. Given a long list of words, create a class to represent the anagram dictionary. Then, implement a method that accepts a word and returns a list of the anagrams.

Example(s)
isAnagram("coat", "taco") == True
isAnagram("steak", "skate") == True
isAnagram("pots", "stop") == True
isAnagram("stop", "taco") == False

dictionary = AnagramDictionary(["pots", "stop", "cat", "act", "tops", "opts", "post", "spot"])
dictionary.getAnagramWords("tac") == ["cat", "act"]
 

🔎 EXPLORE
List your assumptions & discoveries:
- Need to create an encoding that takes in a word and encodes it 
- Need to create a hash map where keys are encoded word and value is list of original words
- The .getAnagramWords() method just passes in a key to the hash map and returns the value
 
Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1: Use built in .sort() method
Time: O(N log N) for built in sort
Space: O(N) where N is the number of characters

Algorthm 2: Encode word using a hash map and character frequency counter
Time: O(N) where N is number of characters in the input word
Space O(N) where N is number of characters in the input word
 

📆 PLAN
Outline of algorithm #: 1

const isAnagram = (displayedWord, userWord) => displayedWord.split('').sort().join('') === userWord.split('').sort().join('')
 
Outline of algorithm #: 2

Create a seperate helper function called encodeWord which takes in an argument string of lowercase letters called word
Initialize an empty object called freqMap
Iterate through the input string word
  Check if the current character is a key in the freqMap object
    If the current character is a key in the freqMap object then increment it's value by 1
    Else the current character is NOT key in the freqMap object then set it's value to 1

Initialize an empty string call charCount

Iterate through the freqMap object
  Concatinate the key and value which represents the unique characters and counts to the charCount string

Return the charCount string

The isAnagram function will call the helper function on both displayedWord and userWord
It will return encodeWord(displayedWord) === encodeWord(displayedWord)

🛠️ IMPLEMENT
def isAnagram(displayedWord: str, userWord: str) -> bool:

Function signature for follow-up:

class AnagramDictionary:
  def __init__(self, words: list[str]):
    pass

  def getAnagramWords(self, word: str) -> list[str]:
    pass
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

*/

const isAnagramBulitInImp = (displayedWord, userWord) =>
  displayedWord.split("").sort().join("") ===
  userWord.split("").sort().join("");

const encodeWord = (word) => {
  const charCount = Array(26).fill(0);

  for (const char of word) {
    const index = char.charCodeAt(0) - 97; // 'a' is ASCII 97
    charCount[index]++;
  }

  let compressed = "";

  for (let i = 0; i < 26; i++) {
    if (charCount[i] > 0) {
      const char = String.fromCharCode(97 + i); // Convert index back to character
      compressed += `${char}${charCount[i]}`;
    }
  }

  return compressed;
};

const isAnagram = (displayedWord, userWord) =>
  encodeWord(displayedWord) === encodeWord(userWord);

class AnagramDictionary {
  constructor(words) {
    this._dictionary = {};
    this._initializeDictionary(words);
  }

  _initializeDictionary(words) {
    for (let word of words) {
      const encoded = this._encodeWord(word);
      if (!this._dictionary[encoded]) this._dictionary[encoded] = [];
      this._dictionary[encoded].push(word);
    }
  }

  _encodeWord(word) {
    const charCount = Array(26).fill(0);

    for (const char of word) {
      const index = char.charCodeAt(0) - 97; // 'a' is ASCII 97
      charCount[index]++;
    }

    let compressed = "";

    for (let i = 0; i < 26; i++) {
      if (charCount[i] > 0) {
        const char = String.fromCharCode(97 + i); // Convert index back to character
        compressed += `${char}${charCount[i]}`;
      }
    }

    return compressed;
  }

  getAnagramWords(word) {
    const encoded = this._encodeWord(word);
    return this._dictionary[encoded] || [];
  }
}

console.log("\nall isAnagramBulitInImp test cases should return true");
console.log(isAnagramBulitInImp("", ""));
console.log(isAnagramBulitInImp("a", "") === false);
console.log(isAnagramBulitInImp("", "a") === false);
console.log(isAnagramBulitInImp("a", "a"));
console.log(isAnagramBulitInImp("a", "b") === false);
console.log(isAnagramBulitInImp("aaab", "abbb") == false);
console.log(isAnagramBulitInImp("aab", "abb") == false);
console.log(isAnagramBulitInImp("coat", "taco"));
console.log(isAnagramBulitInImp("steak", "skate"));
console.log(isAnagramBulitInImp("pots", "stop"));
console.log(isAnagramBulitInImp("stop", "taco") === false);
console.log(isAnagramBulitInImp("steak", "takes"));
console.log(isAnagramBulitInImp("stare", "taser"));
console.log(isAnagramBulitInImp("taser", "tears"));
console.log(isAnagramBulitInImp("taser", "rates"));
console.log(isAnagramBulitInImp("asd", "qwertyuiop") === false);

console.log("\nall encodeWord test cases should return true");
console.log(encodeWord("") === "");
console.log(encodeWord("a") === "a1");
console.log(encodeWord("z") === "z1");
console.log(encodeWord("zz") === "z2");
console.log(encodeWord("aa") === "a2");
console.log(encodeWord("baa") === "a2b1");
console.log(encodeWord("aba") === "a2b1");
console.log(encodeWord("aab") === "a2b1");
console.log(encodeWord("abb") === "a1b2");
console.log(encodeWord("bab") === "a1b2");
console.log(encodeWord("bba") === "a1b2");
console.log(encodeWord("abc") === "a1b1c1");
console.log(encodeWord("hello") === "e1h1l2o1");
console.log(encodeWord("aaaabbbbcc") === "a4b4c2");
console.log(encodeWord("racecar") === "a2c2e1r2");
console.log(encodeWord("mississippi") === "i4m1p2s4");

console.log("\nall isAnagram test cases should return true");
console.log(isAnagram("", ""));
console.log(isAnagram("a", "") === false);
console.log(isAnagram("", "a") === false);
console.log(isAnagram("a", "a"));
console.log(isAnagram("a", "b") === false);
console.log(isAnagram("aaab", "abbb") == false);
console.log(isAnagram("aab", "abb") == false);
console.log(isAnagram("coat", "taco"));
console.log(isAnagram("steak", "skate"));
console.log(isAnagram("pots", "stop"));
console.log(isAnagram("stop", "taco") === false);
console.log(isAnagram("steak", "takes"));
console.log(isAnagram("stare", "taser"));
console.log(isAnagram("taser", "tears"));
console.log(isAnagram("taser", "rates"));
console.log(isAnagram("asd", "qwertyuiop") === false);

let dictionary = new AnagramDictionary([
  "pots",
  "stop",
  "cat",
  "act",
  "tops",
  "opts",
  "post",
  "spot",
]);

console.log("\nall AnagramDictionary test cases should return true");
console.log(dictionary.getAnagramWords("a").length === 0);
console.log(
  JSON.stringify(dictionary.getAnagramWords("tac")) ===
    JSON.stringify(["cat", "act"])
);
console.log(
  JSON.stringify(dictionary.getAnagramWords("opst")) ===
    JSON.stringify(["pots", "stop", "tops", "opts", "post", "spot"])
);
