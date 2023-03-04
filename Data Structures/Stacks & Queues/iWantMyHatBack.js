/*
❓ PROMPT
Oliver the Dog is missing his favorite hat and is asking his friends at the dog park if they've seen it. Each dog either has seen it or suggests a list of other dogs to ask. Return the name of the dog who has seen the hat. Oliver starts out by asking his best friend. This function will take two parameters. The first is a map of dogs to a list of their friends. The second is Oliver's best friend, who Oliver will ask first.

One of the most common uses of a queue is to keep a list of "work to be done". Just like doing housework, often new things get added to the to-do list while doing some other task. New jobs get added to the end of the queue, and when one is complete, the next one is taken from the top of the list.

Notes
- One of the dogs will have seen the hat
- There might NOT be a way to get to the hat
- Dog names are case sensitive e.g. Fido and fido are NOT the same dog

Q: Can 2 or more dogs think the other knows in a circular logic?
A: Yes, there can be dead-ends represented by two key-value pairs, such as if Angus thinks that Jono knows and Jono thinks that Angus knows.
'Jono': ['Angus'],
'Angus': ['Jono']

Example:

dogs = {
    'Carter': ['Fido', 'Ivy'],
    'Ivy': ["HAT"], // Ivy has seen the hat
    'Loki': ['Snoopy'],
    'Pepper': ['Carter'],
    'Snoopy': ['Pepper'],
    'Fido': []
}

findHat(dogs, 'Loki') == 'Ivy'

🔎 EXPLORE
State your assumptions & discoveries:

Create examples & test cases:

🧠 BRAINSTORM
What approaches could work? Consider data structures or algorithmic patterns.
Analyze the space & time complexity.

Approach 1:

📆 PLAN
High-level outline of approach #: 

🛠️ IMPLEMENT 

*/

const findHat = (dogsFriends, dogsBestFriend) => {};

/*

🧪 VERIFY
Run your examples & test cases.
Methodically analyze and debug issue(s).

*/
