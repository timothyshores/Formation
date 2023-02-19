const testData = {
	Daniel: ["Mike", "Sophie", "James", "Tony"],
	Mike: ["Daniel", "James", "Luke"],
	Tony: ["Daniel", "Sophie"],
	Sophie: ["Michael", "Daniel", "Tony", "Eun Ji"],
};

/*
Given a person's name, return a list of all of the friends of their 1st and 2nd order friends
Duplicates are allowed

Example 1
Input: Tony 

Output: "Daniel", "Mike", "Sophie", "James" and "Tony", Sophie", "Michael", "Daniel", "Tony", "Eun Ji"

Explanation: 
Tony's friend's are Daniel and Sophie
Daniel's friends are "Mike", "Sophie", "James" and "Tony"
Sophie's friends are "Michael", "Daniel", "Tony", "Eun Ji"

*/

const getFirstAndSecondOrderFriends = (friend, friendsOfFriends) => {
	const firstAndSecondOrderFriends = [];

	// Iterate through the first order friends
	for (const firstOrderFriend of friendsOfFriends[friend]) {
		// Add the first order friend to firstAndSecondOrderFriends array
		firstAndSecondOrderFriends.push(firstOrderFriend);
		// Get the first order friend's friends and add to firstAndSecondOrderFriends array
		firstAndSecondOrderFriends.push(...friendsOfFriends[firstOrderFriend]);
	}

	// Return firstAndSecondOrderFriends array
	return firstAndSecondOrderFriends;
};

// Test cases
console.log(getFirstAndSecondOrderFriends("Tony", testData)); // ["Daniel", "Mike", "Sophie", "James" and "Tony", Sophie", "Michael", "Daniel", "Tony", "Eun Ji"]
console.log(getFirstAndSecondOrderFriends("Tony", testData).length === 10); // true

/*
Given a person's name and a positive number, n, greater than 0, return the nth order friends. For n = 1, that is the person's direct friends. For n = 2, this gives the same result as the first problem.
*/

// Bread first search or level order traversal
const getNthOrderFriend = (name, n, friendsOfFriends) => {
	let queue = [name];
	let size;

	for (let i = 0; i < n; i++) {
		size = queue.length;

		for (let j = 0; j < size; j++) {
			queue.push(...friendsOfFriends[queue.shift()]);
		}
	}

	return queue;
};

// All test cases return true
console.log(getNthOrderFriend("Tony", 1, testData).length === 2); 
console.log(getNthOrderFriend("Tony", 1, testData)[0] === 'Daniel'); 
console.log(getNthOrderFriend("Tony", 1, testData)[1] === "Sophie");

console.log(getNthOrderFriend("Tony", 2, testData).length === 8); 
console.log(getNthOrderFriend("Tony", 2, testData)[0] === 'Mike'); 
console.log(getNthOrderFriend("Tony", 2, testData)[1] === 'Sophie'); 
console.log(getNthOrderFriend("Tony", 2, testData)[2] === 'James'); 
console.log(getNthOrderFriend("Tony", 2, testData)[3] === 'Tony'); 
console.log(getNthOrderFriend("Tony", 2, testData)[4] === 'Michael'); 
console.log(getNthOrderFriend("Tony", 2, testData)[5] === 'Daniel',); 
console.log(getNthOrderFriend("Tony", 2, testData)[6] === 'Tony',); 
console.log(getNthOrderFriend("Tony", 2, testData)[7] === "Eun Ji"); 

