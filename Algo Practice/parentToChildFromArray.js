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


🛠️ IMPLEMENT

*/
