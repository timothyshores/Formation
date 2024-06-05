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

const isPortmanteau = (word1, word2, proposed) => {
  if (proposed.length >= word1.length + word2.length) return false;

  for (let i = 1; i < proposed.length; i++) {
    const prefix = proposed.slice(0, i);
    const suffix = proposed.slice(i);

    if (
      (word1.startsWith(prefix) && word2.endsWith(suffix)) ||
      (word2.startsWith(prefix) && word1.endsWith(suffix))
    )
      return true;
  }

  return false;
};
