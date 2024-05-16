/*
'''
You're working on a finance application and need to format monetary amounts in the following manner for accounting purposes. Every number must adhere to a strict set of rules:

1. All amounts are rounded to two decimal places, even if it is .00.
2. A $ precedes the first digit.
3. Thousands, millions, billions, etc have commas between every 3 digits from the left of the decimal.
4. Negative numbers are surrounded by parentheses.
5. If the absolute amount is less than 1, there should still be a zero before the '.'

Write a function that takes a numeric value and outputs the "finance formatted" string representation.

This is a very realistic data processing problem with lots of special cases!
 

EXAMPLE(S)
moneyFormat(1) == "$1.00"
moneyFormat(-1) == "($1.00)"
moneyFormat(16) == "$16.00"
moneyFormat(123) == "$123.00"
 
moneyFormat(0.01) == "$1.01"
moneyFormat(0) == "$0.00"

BRAINSTORM
Approach: Check if amount is negative, convert to string, manipulate and return string
Time: O(1)
Space: O(1)

PLAN
- Check if amount is negative and store in a boolean variable
- Remove leading zeros, remove digits < .01 or add digits for cents
- Split string into an array for dollars and cents
- Add commas to dollar amonunt
- Add "$" to the start of the string and '.' between dollars and cents
- If amount is negative then wrap in "()""
- Return final string

FUNCTION SIGNATURE
function moneyFormat(amount) {
def moneyFormat(amount: float) -> str:

*/
