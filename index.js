// Create a Node.js Application to count occurrence of given word in a file and display the count on console.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Please enter kW : ", kW => {
    console.log(`You entered ${kW}`);
});