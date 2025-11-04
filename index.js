const prompt = require('prompt-sync')();

console.log ("welcome to the tesla showroom assistant!");

// Initialize price
let price = 0;

// Get user input for car model
let userInput = prompt("Which Tesla model are you interested in? (Model 3 / Model Y / Model S):");

if (userInput === "Model 3") {
    price += 39990;
} else if (userInput === "Model Y") {
    price += 49990;
} else if (userInput === "Model S") {
    price += 89990;
}

// Get user input for car color
let userInput2 = prompt("What color would you like? (white, black, red):");

if (userInput2 === "white") {
    price += 0;
} else if (userInput2 === "black") {
    price += 1000;
} else if (userInput2 === "red") {
    price += 2000;
}   

// Get user input for battery upgrade
let userInput3 = prompt("Would you like a long-range battery upgrade? (yes/no):");

if (userInput3 === "yes") {
    price += 10000;
} else if (userInput3 === "no") {
    price += 0;
}

console.log( "Calculating your total..." );

// Display total price
console.log( `Base price for model ${userInput}: $${price}` );