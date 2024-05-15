/*
'''
❓ PROMPT
Given an array of arrays representing relations  *child, parent1, and parent2* in each row, print a string representing all children of each parent.

For example: *Ben is the parent of James, Jen*. 
The formatting doesn't matter as long as all children are represented in the final output. 
You will need to return the entire result as strings separated by newlines to match against the strings in these comparisons accurately.

return parentRelationships.join("\n") //javascript
return "\n".join(parentRelationships) #python

Example(s)
Input: []
Output: 'No family relations'

Input: [
  ["James", "Ben", "Lisa"],
  ["George", "Taylor", "Fred"],
  ["Jen", "Ben", "Gloria"]
]
Output:
'Ben is the parent of James, Jen'
'Lisa is the parent of James'
'Taylor is the parent of George'
'Fred is the parent of George'
'Gloria is the parent of Jen'

🔎 EXPLORE
List your assumptions & discoveries:
 - The first element in each subarray is a child
 - The second and third element in the array are the parents
 - A parent can have more than 1 child
 - A parent can have a child with a previous partner or a new partner
 
🧠 BRAINSTORM
What approaches could work?
Algorithm 1: Create a hashmap, every key is a parent and the value are the child or children for that parent
Time: O(N) where N is the number of subarrays
Space: O(N) where N is the number of subarrays
 
Technically time and space are 3 * N but every subarray has 3 elements and thus is a constant

📆 PLAN
Outline of algorithm #: 1

Create a JS object called relationshipsMap

Iterate through input relationships input array using a for loop
    Get the second and third element, at indices 1 and 2, in each sub array
        Check the keys in the relationshipsMap
            If the current parent does NOT exist
                Create the key and set it to [child] where child is the first element in the array
            Else the current parent is a key with an array values
                Push the current child into the array value

Create a helper function that takes a parent input string and an array of children
    Returns parent + ' is the parent of ' + childrenArray.join(',')

Initialize and empty array called parentRelationships

Iterate through all keys in relationshipsMap
    Call helper function with key as the current parent and value as the parents children
    Push the result of calling the helper function into parentRelationships array
    
return parentRelationships.join("\n")

🛠️ IMPLEMENT

*/
