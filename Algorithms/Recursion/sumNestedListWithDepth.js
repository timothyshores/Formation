// Prompt
// Given a nested array where each element may be 1) an integer or 2) an array, whose elements may be integers or other arrays, compute the sum of all the integers in the nested array.

// Modify this code to multiply each list sum by its depth in the nesting. [1, 2] returns 3 since (1 + 2) is only inside one array. But [1, [2, 3]] evaluates to 11 because the (2 + 3) is at depth 2, so 5 * 2 is 10, then add the one for 11.

// Function Signature
// def sumNestedListWithDepth(nestedList: list[int]) -> int:

// Expected Runtime
// Time: O(n), where n is the total count of numbers in the nested array
// Space: O(d), where d is the depth of the deepest nesting, since a stack frame is needed for each recursive call.

const sumNestedListWithDepth = (list, depth = 2) => {};
