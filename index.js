//Create a Node.js Application that accepts first name, last name and date of birth of a Person and define a Module that concatenate firstName and lastName and also calculate the age of the Person.
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function form() {

   
    
    rl.question("please enter a first name : " , firstName => {

        rl.question("please enter a last name : " , lastName => {

            rl.question("please enter a date : " , dob => {

                dob = dob.split('/');
                let birthDay = parseInt(dob[0]);
                let birthMonth = parseInt(dob[1]);
                let birthYear = parseInt(dob[2]);

                let currentYear = new Date().getUTCFullYear();

                let age = currentYear - birthYear;

                console.log(`Hi ${firstName} ${lastName} you are ${age} years old`);

            });
        
        });
        
    });

    
}

form();