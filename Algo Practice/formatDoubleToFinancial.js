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


const addCommaToInt = (str) =>
  str.length > 3 ? `${addCommaToInt(str.slice(0, -3))},${str.slice(-3)}` : str;

const moneyFormat = (amount) => {
  // Check if the input amount is negative
  const isNegative = amount < 0;

  // If the amount is negative, make it positive for easier formatting
  if (isNegative) amount *= -1;

  // Remove leading zeros and round amount float to two decimal places
  amount = parseFloat(amount.toFixed(2));

  // Convert amount into a string of arrays for dollars and cents
  const [dollars, cents] = amount.toFixed(2).split(".");

  // Add commas to dollars
  const formattedDollars = addCommaToInt(dollars);

  // Add dollars sign and dot formatting
  let formattedAmount = `$${formattedDollars}.${cents}`;

  // Handle negative amounts by wrapping in parentheses
  if (isNegative) formattedAmount = `(${formattedAmount})`;

  return formattedAmount;
};

// All test cases return true

// happy cases
console.log(moneyFormat(0) == "$0.00");
console.log(moneyFormat(1) == "$1.00");
console.log(moneyFormat(-1) == "($1.00)");
console.log(moneyFormat(16) == "$16.00");
console.log(moneyFormat(123) == "$123.00");

// decimal variants
console.log(moneyFormat(0.01) == "$0.01");
console.log(moneyFormat(0.02) == "$0.02");
console.log(moneyFormat(0.3) == "$0.30");
console.log(moneyFormat(0.0001) == "$0.00");
console.log(moneyFormat(4.954) == "$4.95");
console.log(moneyFormat(4.955) == "$4.96");
console.log(moneyFormat(4) == "$4.00");

// comma variants
console.log(moneyFormat(1234) == "$1,234.00");
console.log(moneyFormat(1001.01) == "$1,001.01");
console.log(moneyFormat(50000) == "$50,000.00");
console.log(moneyFormat(6789123456789) == "$6,789,123,456,789.00");

// negative variants
console.log(moneyFormat(-0.01) == "($0.01)");
console.log(moneyFormat(-0.02) == "($0.02)");
console.log(moneyFormat(-0.001) == "($0.00)");
console.log(moneyFormat(-1000) == "($1,000.00)");

// complex variants
console.log(moneyFormat(-34567) == "($34,567.00)");
console.log(moneyFormat(-12345.67) == "($12,345.67)");
console.log(moneyFormat(-12345.678) == "($12,345.68)");
