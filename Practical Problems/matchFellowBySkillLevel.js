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
Algorithm 1: 
📆 PLAN
Outline of algorithm #:
🛠️ IMPLEMENT
function canMatchFellows(skillMap) {
def canMatchFellows(skillMap: dict) -> bool: 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/
