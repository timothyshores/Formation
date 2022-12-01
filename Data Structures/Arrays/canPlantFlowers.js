// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer newFlowers, return true if all newFlowers can be planted in the flowerbed without violating the no-adjacent-flowers rule.

// Expected Time Complexity: O(N) to iterate through the length N array
// Expected Space Complexity: O(1) to store some variables

// Example 1
// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true

// Example 2
// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false

// Example 3
// Input: flowerbed = [0,0,1], n = 1
// Output: true

const canPlantFlowers = (flowerbed, newFlowers) => {
	if (newFlowers === 0) return true;

	// add zeros to both ends
	flowerbed.unshift(0);
	flowerbed.push(0);

	const thereAreThreeAdjacentEmptyFlowerBeds = (i) =>
		flowerbed[i - 1] === 0 && flowerbed[i] === 0 && flowerbed[i + 1] === 0;

	for (let i = 1; i < flowerbed.length - 1; i++) {
		if (thereAreThreeAdjacentEmptyFlowerBeds(i)) {
			// Plant new flower and decrement newFlowers integer
			flowerbed[i] = 1;
			newFlowers--;
		}
	}

	return newFlowers <= 0;
};

// Test Cases
// 1-slot flowerbeds
console.log(canPlantFlowers([1], 0) === true);
console.log(canPlantFlowers([1], 1) === false);
// // 2-slot flowerbeds
console.log(canPlantFlowers([0, 1], 1) === false);
console.log(canPlantFlowers([0, 0], 1) === true);
console.log(canPlantFlowers([1, 0], 1) === false);
console.log(canPlantFlowers([1, 1], 1) === false);

// every other slot filled
console.log(canPlantFlowers([0, 1, 0, 1], 1) === false);
console.log(canPlantFlowers([0, 1, 0, 1, 0, 1], 1) === false);
console.log(canPlantFlowers([0, 1, 0, 1, 0, 1, 0, 1], 1) === false);

// no slot filled
console.log(canPlantFlowers([0, 0], 1) === true);
console.log(canPlantFlowers([0, 0], 2) === false);
console.log(canPlantFlowers([0, 0, 0], 2) === true);
console.log(canPlantFlowers([0, 0, 0], 3) === false);
console.log(canPlantFlowers([0, 0, 0, 0], 3) === false);
console.log(canPlantFlowers([0, 0, 0, 0, 0], 3) === true);

// all slots filled
console.log(canPlantFlowers([1], 1) === false);
console.log(canPlantFlowers([1, 1], 1) === false);
console.log(canPlantFlowers([1, 1, 1], 1) === false);
console.log(canPlantFlowers([1, 1, 1, 1], 1) === false);
console.log(canPlantFlowers([1, 1, 1, 1, 1], 1) === false);

// mixture of slots filled
console.log(canPlantFlowers([0, 0, 1, 0, 0], 2) === true);
