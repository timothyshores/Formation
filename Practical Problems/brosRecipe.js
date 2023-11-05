/*

❓ PROMPT
You found a note from your brother when you got home from school:

"Doofus, go to the store to pick up some ingredients for my recipe. Don't buy anything we already have at home like last time. Make your grocery list, you lazy bum. Use your own money to pay for it, you owe me for only pranking you 5 times this week. Try to get it done before you're old, loser."

Your brother's a jerk and gave you the recipe in the hardest possible way to decipher: one long line of all the quantities followed by all the ingredients. Meanwhile, the ingredients at home are in tabular format, ugh!

Example(s)
Recipe: "12 3 3 2 egGs baCon sAusaGe souRdoughBread"
At home: {"SauSage": 6, "EGgs": 4, "BACoN": 3, "banAnA"; 1}
Grocery list: {"eggs": 8, "sourdoughbread": 1}

You need 12 eggs but you only have 4 at home, so you need 8 more, dweeb.
You need 3 bacon and you have 3 at home, so you don't need anymore, dweeb.
You need 3 sausage and you have 6 at home, so you don't need anymore, dweeb.
You need 1 sourdoughbread but you have none at home, so you need 1 more, dweeb.
The banana isn't a part of the recipe, so it doesn't matter, dweeb.

Your brother swears he could do this so much faster than you, but he's got more important things to do like go grind the half-pipe with some gnarly shredz.

🔎 EXPLORE
List your assumptions & discoveries:
- Want to return the grocery list hash map / JS object

Insightful & revealing test cases:
- no ingredients recipe
- no ingredients at home
- some ingredients at home
- all ingredients at home
- unneeded ingredients at home

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()

📆 PLAN
Outline of algorithm #: 

🛠️ IMPLEMENT
function getGroceryList(brosRecipe, ingredientsAtHome) {
def get_grocery_list(bros_recipe: str, ingredients_at_home:dict) -> dict:

*/

const convertKeysToLowerCase = (obj) => {
	for (let key in obj) {
		obj[key.toLowerCase()] = obj[key];
		delete obj[key];
	}

	return obj;
};

const getGroceryList = (brosRecipe, ingredientsAtHome) => {
	const groceryList = {};

	if (!brosRecipe) return groceryList;

	// Convert keys in ingredientsAtHome to lowercase
	ingredientsAtHome = convertKeysToLowerCase(ingredientsAtHome);

	// Create array from brosRecipe string
	recipeArray = brosRecipe.split(" ");

	// Iterate through recipeArray
	for (let i = 0; i < recipeArray.length / 2; i++) {
		const lagPointer = i;
		const leadPointer = i + recipeArray.length / 2;

		const recipeIngredient = recipeArray[leadPointer].toLowerCase(); // key of ingredientsAtHome
		const recipeQuantity = Number(recipeArray[lagPointer]); // value ingredientsAtHome

		// Have the ingredient at home
		if (ingredientsAtHome[recipeIngredient]) {
			const atHomeQuantity = ingredientsAtHome[recipeIngredient];
			// Recipe requires more than what we have at home. Add difference to grocery list
			if (recipeQuantity > atHomeQuantity)
				groceryList[recipeIngredient] = recipeQuantity - atHomeQuantity;
		} else {
			// We do not have the ingredient. Add full quantity to grocery list
			groceryList[recipeIngredient] = recipeQuantity;
		}
	}

	return groceryList;
};

/*

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

*/

// All test cases return true

// Provided example test case
let brosRecipe1 = "12 3 3 2 egGs baCon sAusaGe souRdoughBread";
let ingredientsAtHome1 = { SauSage: 6, EGgs: 4, BACoN: 3, banAnA: 1 };
let actualGroceryList1 = getGroceryList(brosRecipe1, ingredientsAtHome1);
let expectedGroceryList1 = { eggs: 8, sourdoughbread: 2 };
console.log(
	JSON.stringify(actualGroceryList1) === JSON.stringify(expectedGroceryList1)
);

//  No ingredients in the recipe
let brosRecipe2 = "";
let ingredientsAtHome2 = { suGar: 2, floUR: 5 };
let expectedGroceryList2 = {};
console.log(
	JSON.stringify(getGroceryList(brosRecipe2, ingredientsAtHome2)) ===
		JSON.stringify(expectedGroceryList2)
);

// No ingredients at home
let brosRecipe3 = "1 2 toMatO leTTucE";
let ingredientsAtHome3 = {};
let expectedGroceryList3 = { tomato: 1, lettuce: 2 };
console.log(
	JSON.stringify(getGroceryList(brosRecipe3, ingredientsAtHome3)) ===
		JSON.stringify(expectedGroceryList3)
);

// Some ingredients at home
let brosRecipe4 = "4 2 3 Cheese EggS bReAD";
let ingredientsAtHome4 = { chEEse: 5, eGGs: 1, LEttUcE: 3 };
let expectedGroceryList4 = { eggs: 1, bread: 3 };
console.log(
	JSON.stringify(getGroceryList(brosRecipe4, ingredientsAtHome4)) ===
		JSON.stringify(expectedGroceryList4)
);

// All ingredients at home
let brosRecipe5 = "2 4 1 MIlK eGGs bReaD";
let ingredientsAtHome5 = { mILk: 2, EggS: 4, BrEAd: 1 };
let expectedGroceryList5 = {};
console.log(
	JSON.stringify(getGroceryList(brosRecipe5, ingredientsAtHome5)) ===
		JSON.stringify(expectedGroceryList5)
);

// Unneeded ingredients at home
let brosRecipe6 = "3 2 1 apPLeS OraNgeS bANaNA";
let ingredientsAtHome6 = {
	SuGaR: 20,
	aPPleS: 5,
	CoFfeE: 5,
	ORanGes: 3,
	baNANa: 1,
	TuRkEy: 10,
};
let expectedGroceryList6 = {};
console.log(
	JSON.stringify(getGroceryList(brosRecipe6, ingredientsAtHome6)) ===
		JSON.stringify(expectedGroceryList6)
);
