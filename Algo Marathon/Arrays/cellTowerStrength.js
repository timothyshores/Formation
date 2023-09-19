/*

Cell Tower Strength

You are given an array representing the positions of cell towers along a 1-dimensional line. You are given a second array representing customers' positions along the same line. Given these two inputs, you must determine the minimum signal strength *k* such that every customer is covered by at least one cell tower. All cell towers must have the exact same signal strength and cover customers to their left and right equally.

These arrays can be imagined as street addresses along a road. At each address, there might be a customer, and there might also be a tower at that location.

EXAMPLE(S)
Let's say cell towers are at: [0, 2, 6, 10]
and customers are at: [0, 5, 11]

In this case, you only need a cell distance of 1, because customer 5 would be covered by 6 and customer 11 would be covered by 10.

If the customers were at: [0, 4, 13], you'd need a distance of 3 in order for customer 13 to be covered by 10.

FUNCTION SIGNATURE
def search(customers: list[int], towers: list[int]) -> int:

ENGINEERING METHOD

EXPLORE
- The problem involves finding the minimum signal strength (k) required for cell towers to cover all customers.
- Customers and cell towers are represented as 1-dimensional positions along a line.
- Cell towers must cover customers to their left and right equally.

BRAINSTORM
Approach 1: Iterate through customers and for each customer, find the nearest left and right tower, calculate the distance, and keep track of the maximum distance. This approach ensures equal coverage to the left and right.

Time Complexity: O(m + n) where m is the number of customers and n is the number of towers
Space Complexity: O(1) only need integers to track max distance, left and right pointers in memory

PLAN

*/

const search = (customers, towers) => {
};
