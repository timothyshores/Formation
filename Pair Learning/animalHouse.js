/*

We're going to create a class 'AnimalHouse' with the following functions: 
* addCat() / adoptCat()
* addDog() / adoptDog()
* adoptAnimal()

In this Animal House, cats and dogs are added to the house. When *adoptCat()* or *adoptDog() is called, you return the cat or dog that has been in the house for the longest amount of time. *adoptAnimal()* gets either the cat or dog that has been there the longest.

EXAMPLE(S)
let house = AnimalHouse()
house.addCat("Sweet Tea")
house.adoptCat() == "Sweet Tea"
house.addDog("Oliver")
house.addCat("Moose")
house.adoptDog() == "Oliver"
house.adoptDog() == "There are no dogs left to adopt"
house.adoptCat() == "Moose"
house.adoptCat() == "There are no cats left to adopt"
house.adoptAnimal() == "There are no animals left to adopt"

*/

class AnimalHouse {
  constructor(animalId = 1, dogs = [], cats = []) {
    this.animalId = animalId;
    this.dogs = dogs;
    this.cats = cats;
  }

  get _noAnimalsAvailable() {
    return this._noCatsAvailable && this._noDogsAvailable;
  }

  get _noCatsAvailable() {
    return this.cats.length === 0;
  }

  get _noDogsAvailable() {
    return this.dogs.length === 0;
  }

  get _oldestDog() {
    return this.dogs[this.dogs.length - 1];
  }

  get _oldestCat() {
    return this.cats[this.cats.length - 1];
  }

  _unableToAdopt = (type) => `There are no ${type} left to adopt`;

  addCat = (name) => this.cats.unshift({ id: this.animalId++, name });

  addDog = (name) => this.dogs.unshift({ id: this.animalId++, name });

  adoptCat = () => (this._noCatsAvailable ? this._unableToAdopt("cats") : this.cats.pop().name);

  adoptDog = () => (this._noDogsAvailable ? this._unableToAdopt("dogs") : this.dogs.pop().name);

  adoptAnimal = () =>
    this._noAnimalsAvailable
      ? this._unableToAdopt("animals")
      : this._noCatsAvailable
      ? this.adoptDog()
      : this._noDogsAvailable
      ? this.adoptCat()
      : this._oldestCat.id < this._oldestDog.id
      ? this.adoptCat()
      : this.adoptDog();
}

// All test cases return true
const house = new AnimalHouse();
house.addCat("Sweet Tea");
console.log(house.adoptCat() == "Sweet Tea");
house.addDog("Oliver");
house.addCat("Moose");
console.log(house.adoptDog() == "Oliver");
console.log(house.adoptDog() == "There are no dogs left to adopt");
console.log(house.adoptCat() == "Moose");
console.log(house.adoptCat() == "There are no cats left to adopt");
console.log(house.adoptAnimal() == "There are no animals left to adopt\n");

const rescue = new AnimalHouse();
rescue.addCat("Gato");
rescue.addCat("Fato");
rescue.addCat("Napo");
rescue.addCat("Sapo");
rescue.addDog("Barko");
rescue.addDog("Snarpo");
rescue.addDog("Nippo");
rescue.addDog("Paavo");
rescue.addDog("Zozo");
rescue.addCat("Mewo");
console.log(rescue.adoptCat() == "Gato");
console.log(rescue.adoptAnimal() == "Fato");
console.log(rescue.adoptDog() == "Barko");
console.log(rescue.adoptAnimal() == "Napo");
console.log(rescue.adoptAnimal() == "Sapo");
console.log(rescue.adoptAnimal() == "Snarpo");
console.log(rescue.adoptAnimal() == "Nippo");
console.log(rescue.adoptDog() == "Paavo");
console.log(rescue.adoptDog() == "Zozo");
console.log(rescue.adoptDog() == "There are no dogs left to adopt");
console.log(rescue.adoptCat() == "Mewo");
console.log(rescue.adoptAnimal() == "There are no animals left to adopt");
