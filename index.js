const prompt = require('prompt-sync')();

console.log ("welcome to the tesla showroom assistant!");

// Initialize price
let modelPrice = 0;
let colorPrice = 0;
let batteryPrice = 0;
let totalPrice = 0;

// Get user input for car model
let userInput = prompt("Which Tesla model are you interested in? (Model 3 / Model Y / Model S):");
userInput = userInput.trim().toLowerCase();

if (userInput=== "model 3") {
    modelPrice += 39990;
} else if (userInput === "model y") {
    modelPrice += 49990;
} else if (userInput === "model s") {
    modelPrice += 89990;
}

// Get user input for car color
let userInput2 = prompt("What color would you like? (white, black, red):");
userInput2 = userInput2.trim().toLowerCase();

if (userInput2 === "white") {
    colorPrice += 0;
} else if (userInput2 === "black") {
    colorPrice += 1000;
} else if (userInput2 === "red") {
    colorPrice += 2000;
}   

// Get user input for battery upgrade
let userInput3 = prompt("Would you like a long-range battery upgrade? (yes/no):");
userInput3 = userInput3.trim().toLowerCase();

if (userInput3 === "yes") {
    batteryPrice += 10000;
} else if (userInput3 === "no") {
    batteryPrice += 0;
}

totalPrice = modelPrice + colorPrice + batteryPrice;


console.log( "Calculating your total..." );

// Display total price
console.log( `Base price for model ${userInput}:` );

console.log(`color selected: ${userInput2}`);

console.log(`long-range battery upgrade: ${userInput3}`);


console.log( `Your total price is: $${price}` );