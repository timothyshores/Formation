/*
'''
❓ PROMPT
Given a hexadecimal string as input, write a function that returns its integer representation.
The hexadecimal character representation will be given in uppercase format.

Example(s)
Ex 1:
    Given an input: 2A
    iteration 1: (2)
    0 * 16 = 0
    0 + 2 = 2
    
    iteration 2: (A) 
    2 * 16 = 32
    32 + 10 = 42
    
    final result = 42.

Ex 2:
    Given an input 3FF
    iteration 1: (3)
    0 * 16 = 0
    0 + 3 = 3
    
    iteration 2: (F)
    3 * 16 = 48
    48 + 15 = 63
    
    iteration 3: (F)
    64 * 16 = 1008
    1008 + 15 = 1023
    
    final result = 1023.

'''
*/

const hexMap = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  A: 10,
  B: 11,
  C: 12,
  D: 13,
  E: 14,
  F: 15,
};

const hexToInt = (hexString) => {
  const len = hexString.length;
  let result = 0;

  for (let i = 1; i <= len; i++) {
    const currChar = hexString[len - i];
    result += Number(hexMap[currChar] * 16 ** (i - 1));
  }

  return result;
};

const hexToIntRecursive = (hexString) => {
  if (!hexString) return 0;

  const helper = (index = 0) => {
    // Base Case
    if (index === hexString.length - 1) return hexMap[hexString[index]];
    // Recursive Case
    return (
      helper(index + 1) +
      hexMap[hexString[index]] * 16 ** (hexString.length - index - 1)
    );
  };

  return helper();
};
\
