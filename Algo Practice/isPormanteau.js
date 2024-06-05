/*

Given three words, determine if the third word is potentially a portmanteau of the first two.

A portmanteau (https://en.wikipedia.org/wiki/Portmanteau) is a word that is made by taking the start of one word and the end of another and mashing them together. Brunch is a great example, combining the first 2 letters of "breakfast" with the last 4 of "lunch".

Compound words aren't considered portmanteaus, so "football" is not a portmanteau of "foot" and "ball". At least one of the two words needs to be truncated.

EXAMPLE(S)
isPortmanteau("smoke", "fog", "smog") == True (sm + og)
isPortmanteau("snake", "fog", "smog") == False
isPortmanteau("lunch", "breakfast", "brunch") == True (br + unch)
isPortmanteau("shrink", "inflation", "shrinkflation") == True (shrink + flation)
isPortmanteau("foot", "ball", "football") == False
 
isPortmanteau("smoke", "fog", "smog") == True (sm + og)
isPortmanteau("smoke", "fog", "smoke") == False

FUNCTION SIGNATURE
function isPortmanteau(word1, word2, proposed) {
def isPortmanteau(word1: str, word2: str, proposed: str) -> bool:

*/
