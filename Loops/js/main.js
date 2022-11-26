let myNumber = 0;
while(myNumber < 50) {
    myNumber++;
    console.log(myNumber);
}

do {
    console.log(myNumber)
} while (myNumber < 50);


let name = "Karol";
for(let i = 0; i < name.length; i++){
    console.log(name.charAt(i));
}

let counter = 0;
let myLetter;
while (counter <= 5) {
    myLetter = name[counter];
    console.log(myLetter);
    if(counter === 1) {
        counter += 3;
        continue;
    }
    if(myLetter === "o") break;
    counter++;
}
console.log(counter);