const myArray = [];

// add elements to an array

myArray[0] = "Karol";
myArray[1] = 1001;
myArray[2] = false;
myArray[3] = "name";
myArray[4] = 55;
myArray[5] = "get";

//refer to an array

console.log(myArray);

// length property

console.log(myArray.length);

//last element in array

console.log(myArray[myArray.length - 1]);

// reference to specific element
console.log(myArray[1]);



// add something at the BEGINNING of array

myArray.unshift(42);

// remove something from the BEGINNING of array

myArray.shift();

// add something to array at the END

myArray.push("school");

//remove something from the END of array

myArray.pop();

// store last item from array:

const lastItem = myArray.pop();

//When we try to reach something what is not into array (f.e. myArray[50]) then its UNDEFINED

//Removing element from the middle of array:

delete myArray[1]; // removes item but leaves position with UNDEFINED so array doesnt change length

myArray.splice(1,2); // first 1 is position, second 1 is how many values counting first position
                                        // so in this case we remove myArray[1] and myArray[2]

myArray.splice(1, 1, 42);  // it replaces item on position 1 with number 42;
myArray.splice(1,0, 567); //it adds 567 at position 1 without deleting current one


const myOtherArray = ["a", "b", "c", "d", "e", "f"];

const newArray = myOtherArray.splice(2, 5); // it will include position 2, 3, 4 NOT 5

console.log(newArray);

// reverse array

myOtherArray.reverse();

console.log(myOtherArray);

// Create STRING and separate elements of array by comas

const newString = myOtherArray.join();

// REVERSE string method:

// const oldArray = myOtherArray.split(","); //remove comas and put elements back one by one as elements of array


// Contamination:
    //OLD WAY
const arrayONE = ["Z", "Y", "X"];
const arrayTWO = ["C", "B", "A"];

const arrayTHREE = arrayONE.concat(arrayTWO);

console.log(arrayTHREE);

    // NEW WAY
    const arrayFOUR = [...arrayTWO, ...arrayONE];
console.log(arrayFOUR);

// Nesting

const equipShelfA = ["baseball", "football", "volleyball"];
const equipShelfB = ["basketball", "golf balls", "tennis balls"];

const clothesShelfA = ["tank tops", "t-shirts", "jerseys"];
const clothesShelfB = ["sweat tops", "sweat pants", "hoodies"];

console.log(equipShelfA[1]);
console.log(clothesShelfB[0]);

const equipDept = [equipShelfA, equipShelfB];
const clothesDept = [clothesShelfA, clothesShelfB];

console.log(equipDept[0][1]); // choose shelf and position of item
console.log(clothesDept[1][0]);

const sportStore = [equipDept, clothesDept];

console.log(sportStore[0][0][1]); //[Department] [Shelf] [Position on shelf]









