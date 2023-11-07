/*

❓ PROMPT
Given an input dictionary mapping Fellows (as string names) to skill ratings, return true if you're able to pair up Fellows with matching skill ratings with no Fellows leftover.

Example(s)
skillMap = {"oliver": 3, "pixel": 3, "pinky": 5, "tobey": 5}
canMatchFellows(skillMap) == True

skillMap = {"oliver": 3, "pixel": 4, "pinky": 5, "tobey": 5}
canMatchFellows(skillMap) == False

🔎 EXPLORE
List your assumptions & discoveries:
- Return true if every fellow can be paired with another fellow with equal skill ranking

Insightful & revealing test cases:
- If input map is empty return true
- Fellows names are case sensitive e.g. "oliver" and "Oliver" are different fellows

🧠 BRAINSTORM
What approaches could work?
Algorithm 1: Brute force

- Convert the values in the input dictionary to an array
- Nested for loop approach. O(n^2) time complexity
    - Delete the paired elements. Could be O(N) time if call .shift() on the first element
- If don't find a pairing return false
- If array is empty then return true

Time: O(n^3)
Space: O(n)

Algorithm 2: Sort array

- Convert the values in the input dictionary to an array
- Call .sort() on values array
- Loop through the values array
    for (let i = 0; i < valuesArr.length; i += 2) {
    
    }
- Check the elements at valuesArr[i] and valuesArr[i + 1]
    - If they're the same then continue
    - If they're different return false
- Get to the end of the array then return true

Time: O(n log n)
Space: O(n)

Algorithm 3: Use a set

- Initialize an empty set
- Iterate through values in input dictionary
    // Either the skill ratings appears in the set or it does not
    - If skill rating is NOT in the set
        - Add the current skill rating to the set
    - Else skill rating is in the set
        - Remove the current skill rating to the set
- Return if the set.size() is 0

Time: O(n)
Space: O(n)


📆 PLAN
Outline of algorithm #: 3

- Initialize an empty set
- Iterate through values in input dictionary
    // Either the skill ratings appears in the set or it does not
    - If skill rating is NOT in the set
        - Add the current skill rating to the set
    - Else skill rating is in the set
        - Remove the current skill rating to the set
- Return if the set.size() is 0

🛠️ IMPLEMENT
function canMatchFellows(skillMap) {
def canMatchFellows(skillMap: dict) -> bool: 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

const canMatchFellows = (skillMap) => {
	const skillRatings = Object.values(skillMap);
	if (skillRatings.length % 2 === 1) return false;

	const unpairedFellowSkillRatings = new Set();

	for (const key in skillMap) {
		const skillRating = skillMap[key];

		if (unpairedFellowSkillRatings.has(skillRating)) {
			unpairedFellowSkillRatings.delete(skillRating);
		} else {
			unpairedFellowSkillRatings.add(skillRating);
		}
	}

	return unpairedFellowSkillRatings.size === 0;
};

// All test cases return true

// 4 fellows with 2 paired skill ratings
console.log(canMatchFellows({ oliver: 3, pixel: 3, pinky: 5, tobey: 5 })); // true

// 4 fellows with the asme skill ratings
skillMap = { oliver: 3, pixel: 3, pinky: 3, tobey: 3 };
console.log(canMatchFellows(skillMap)); // true

// Empty input dictionary
console.log(canMatchFellows({})); // true

// 1 fellow
console.log(!canMatchFellows({ oliver: 3 })); // false

// 3 fellows
console.log(!canMatchFellows({ oliver: 3, pixel: 3, pinky: 5 })); // false

// 4 fellows, 2 unpaired
console.log(!canMatchFellows({ oliver: 3, pixel: 4, pinky: 5, tobey: 5 })); // false

// 3 fellows
skillMap = { oliver: 3, pixel: 3, pinky: 5, tobey: 5, paavo: 1 };
console.log(!canMatchFellows(skillMap));
