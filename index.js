// Create a Node. Js Application for validating student registration form.
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function form() {

    function askRollNo() {
        rl.question("please enter roll no :", rollNo => {

            if(!rollNo.match(/^(100|[1-9][0-9]?)$/)){
                console.log("Roll no is not valid");
                askRollNo();
            }
            askName();
        });
    }
    askRollNo();
    
    function askName() {
        rl.question("please enter a name : " , name => {

            if(!name.match(/^[a-zA-Z ]{2,30}$/)){
               console.log("Name is Not valid");
               askName();
            }

            askPhoneNumber();

        });
    }

    function askPhoneNumber() {
        rl.question("please enter a phone number : " , phoneNumber => {

            if(!phoneNumber.match(/^\d{10}$/)){
                console.log("phone no is not valid");
                askPhoneNumber();
            }
            askEmail();
        });
    }

    function askEmail() {
        rl.question("please enter a email : " , email => {

            if(!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)){
                console.log("email no is not valid");
                askEmail();
                return;
            }
            
            console.log("You are registered succefully!!!");

        });
    }

    

}

form();