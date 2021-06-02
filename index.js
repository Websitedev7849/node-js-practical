// Create a Node.js Application to count occurrence of given word in a file and display the count on console.

const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function findWord() {
    fs.readFile('./paragraph.txt', {encoding: 'utf-8'}, (err,data)=>{
        rl.question("Please enter a word to search : ", word => {
            data = data.split(" ");
            let count = 0;
            for (let i = 0; i < data.length; i++) {
                if (word == data[i]) {
                    count++;
                }            
            }
            console.log(`${count} matches found for word "${word}"`);
            findWord();
        });    
    });
}
findWord();
