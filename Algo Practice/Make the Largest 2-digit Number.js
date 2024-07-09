/*

❓ PROMPT
You and a friend are playing a game that uses a deck of cards, each having a single digit number from zero through nine. You are each dealt 5 cards. The person who can make the largest two digit number wins.

Given 2 arrays, each of length 5 representing your hand (first array) and your friend's (second array), return true if you win and false otherwise.

Example(s)
didYouWin([1, 2, 3, 4, 5], [1, 1, 3, 4, 2]) => true
didYouWin([1, 1, 1, 4, 4], [6, 6, 1, 1, 1]) => false
 

🔎 EXPLORE
List your assumptions & discoveries:
- First array is your hand
- Second array is your friend's hand
- Largest two digit number wins
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1: Sort array to get 2 largest numbers, cast to integer and compare ints
Time: O(1) Input size is always 5 cards 
Space: O(1) Store sorted array, create 2 digit array for both hands

📆 PLAN
Outline of algorithm #: 1
- Helper function takes in an array and returns the largest 2 digit number
  - Sort the array
  - Take the 2 largest values
    - Approach 1: Multiple largest value by 10 and add 2nd largest number
    - Approach 2: Cast numbers into strings, concate largestNum + nextLargestNum then cast back to an integer
  - Return the largest 2 digit number

- Call the helper function for both hands
  - Return helper(yourHand) > helper(friendsHand)

*/

const getLargestNumber = (cards) => {
  const sorted = cards.sort((a, b) => b - a);
  return sorted[0] * 10 + sorted[1];
};

const didYouWin = (yourHand, friendsHand) => getLargestNumber(yourHand) > getLargestNumber(friendsHand);

// All test cases return true
console.log(didYouWin([1, 2, 3, 4, 5], [1, 1, 3, 4, 2]));
console.log(didYouWin([5, 5, 5, 5, 9], [9, 4, 3, 2, 1]));
console.log(didYouWin([6, 7, 8, 9, 0], [1, 2, 3, 4, 5]));
console.log(didYouWin([8, 7, 6, 5, 4], [3, 3, 3, 3, 3]));
console.log(didYouWin([9, 8, 7, 6, 5], [4, 4, 4, 4, 4]));
console.log(didYouWin([0, 0, 0, 0, 9], [8, 8, 8, 8, 7]));
console.log(!didYouWin([0, 1, 2, 3, 4], [4, 3, 2, 1, 0]));
console.log(!didYouWin([1, 1, 1, 1, 1], [1, 1, 1, 1, 1]));
console.log(!didYouWin([1, 1, 1, 1, 2], [1, 1, 1, 1, 2]));
console.log(!didYouWin([1, 1, 1, 4, 4], [6, 6, 1, 1, 1]));
console.log(!didYouWin([1, 1, 2, 1, 1], [1, 1, 2, 1, 1]));
console.log(!didYouWin([2, 3, 1, 4, 6], [1, 9, 3, 4, 2]));
console.log(!didYouWin([5, 5, 5, 5, 5], [9, 9, 9, 9, 9]));
console.log(!didYouWin([9, 1, 1, 1, 1], [1, 2, 3, 4, 9]));
