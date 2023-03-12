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

Want to find the path from the dog's best friend to the dog key that contains the value "HAT"

Create examples & test cases:

const allDogsKnow = {
	Ariel: ["Bork"],
	Bork: ["Cassie"],
	Cassie: ["Drex"],
	Drex: ["Zoe"],
	Zoe: ["HAT"],
};
console.table([
	findHat(allDogsKnow, "Ariel") == "Zoe",
	findHat(allDogsKnow, "Bork") == "Zoe",
	findHat(allDogsKnow, "Cassie") == "Zoe",
	findHat(allDogsKnow, "Drex") == "Zoe",
	findHat(allDogsKnow, "Zoe") == "Zoe",
]);

const fidoDoesNotKnow = {
	Carter: ["Fido", "Ivy"],
	Ivy: ["HAT"], // Ivy has seen the hat
	Loki: ["Snoopy"],
	Pepper: ["Carter"],
	Snoopy: ["Pepper"],
	Fido: [],
};

console.table([
	findHat(fidoDoesNotKnow, "Loki") == "Ivy",
	findHat(fidoDoesNotKnow, "Snoopy") == "Ivy",
	findHat(fidoDoesNotKnow, "Ivy") == "Ivy",
	findHat(fidoDoesNotKnow, "Fido") == "Couldn't find the hat",
]);

const dogsDoNotKnow = {
	Zoe: ["Jono"],
	Jono: ["Angus"], // dead-end, circular knowledge
	Angus: ["Jono"], // dead-end, circular knowledge
	Paavo: ["Zoe", "Oliver"],
	Oliver: ["HAT"],
};
console.table([
	findHat(dogsDoNotKnow, "Paavo") == "Oliver",
	findHat(dogsDoNotKnow, "Oliver") == "Oliver",
	findHat(dogsDoNotKnow, "Zoe") == "Couldn't find the hat",
	findHat(dogsDoNotKnow, "Angus") == "Couldn't find the hat",
	findHat(dogsDoNotKnow, "Jono") == "Couldn't find the hat",
]);


🧠 BRAINSTORM
What approaches could work? Consider data structures or algorithmic patterns.
Analyze the space & time complexity.

Approach 1: Traverse the graph
Worst Time: O(N) Worst case scenario we need to ask all dogs in the park
Best Time: O(1) The best friend saw the hat
Space: O(N) Store dogs in the dogs to ask queue and dogs seen queue

📆 PLAN
High-level outline of approach #: 1

Start at the best friend
Ask the best friend who he saw at the dog park
Store the dogs the best friend saw in park in a queue
Call the queue dogs to ask
Dequeue the first dog from the front of the queue
Ask that dog who he saw at the park
If the dog didn't see any other dogs at the dog park return "Couldn't find the hat"
Add those dogs to the queue
Add the dog who we asked who we saw at the park to a set
Call this set dogs asked
Continue removing dogs from the front of the queue by dequeuing
If we dequeue a dog who's already been asked then we have circulat logic
    Return "Couldn't find the hat"

🛠️ IMPLEMENT 

*/

const findHat = (dogsFriends, dogsBestFriend) => {
    // Create a stack to store the dogs we should ask if they saw the hat using an array
    const dogsToAsk = [dogsBestFriend];
    
    // Create a set to store the dogs we already asked to find a circular reference
	const dogsAlreadyAsked = new Set();

    // Continue looping while there are more dogs to ask in the stack
    while (dogsToAsk.length) {
        // Remove the last element from our dogsToAsk stack and set as currentDog
        const currentDog = dogsToAsk.pop();
        
        // Look at the hash map of dogs for the current dogs and set to a semantic variable
		const otherDogsCurrentDogSawAtTheDogPark = dogsFriends[currentDog];

		// If current dog saw the hat then return the current dog
		if (otherDogsCurrentDogSawAtTheDogPark[0] === "HAT") return currentDog;

		// If current dog was already asked if he saw the hat then skip the current dog
		if (dogsAlreadyAsked.has(currentDog)) continue;

		// Add the other dogs that the current dog saw to dogs to ask
		for (const dog of otherDogsCurrentDogSawAtTheDogPark) dogsToAsk.push(dog);

        // Add the current dog to the set of dogs already asked
		dogsAlreadyAsked.add(currentDog);
	}

    // After we asked all dogs who they saw at the dog park without returning a dog
	return "Couldn't find the hat";
};

/*

🧪 VERIFY
Run your examples & test cases.
Methodically analyze and debug issue(s).

*/

const row = (dogs, bestfriend, expectedResult) => ({
	bestfriend: bestfriend,
	expectedResult: expectedResult,
	Output: findHat(dogs, bestfriend) === expectedResult,
});

const allDogsKnow = {
	Ariel: ["Bork"],
	Bork: ["Cassie"],
	Cassie: ["Drex"],
	Drex: ["Zoe"],
	Zoe: ["HAT"],
};

console.log("allDogsKnow");
console.table([
	row(allDogsKnow, "Ariel", "Zoe"),
	row(allDogsKnow, "Bork", "Zoe"),
	row(allDogsKnow, "Bork", "Zoe"),
	row(allDogsKnow, "Cassie", "Zoe"),
	row(allDogsKnow, "Drex", "Zoe"),
	row(allDogsKnow, "Zoe", "Zoe"),
]);

const fidoDoesNotKnow = {
	Carter: ["Fido", "Ivy"],
	Ivy: ["HAT"],
	Loki: ["Snoopy"],
	Pepper: ["Carter"],
	Snoopy: ["Pepper"],
	Fido: [],
};

console.log("fidoDoesNotKnow");
console.table([
	row(fidoDoesNotKnow, "Loki", "Ivy"),
	row(fidoDoesNotKnow, "Snoopy", "Ivy"),
	row(fidoDoesNotKnow, "Ivy", "Ivy"),
	row(fidoDoesNotKnow, "Fido", "Couldn't find the hat"),
]);

const dogsDoNotKnow = {
	Zoe: ["Jono"],
	Jono: ["Angus"], // circular reference to each other
	Angus: ["Jono"], // circular reference to each other
	Paavo: ["Zoe", "Oliver"],
	Oliver: ["HAT"],
};

console.log("dogsDoNotKnow");
console.table([
	row(dogsDoNotKnow, "Paavo", "Oliver"),
	row(dogsDoNotKnow, "Oliver", "Oliver"),
	row(dogsDoNotKnow, "Zoe", "Couldn't find the hat"),
	row(dogsDoNotKnow, "Angus", "Couldn't find the hat"),
	row(dogsDoNotKnow, "Jono", "Couldn't find the hat"),
]);
