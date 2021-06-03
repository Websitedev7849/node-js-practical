//  Using Node.js create an Electricity bill calculation System.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
});

rl.question("Please Enter Total Units :", units=>{
    console.log(`Total Bill : Rs. ${calculateBill(units)}`)
});


function calculateBill(units)
{
	if (units <= 100)
	{
		return units * 10;
	}
	else if (units <= 200)
	{
		return (100 * 10)
			+ (units - 100)
				* 15;
	}
	else if (units <= 300)
	{
		return (100 * 10)
			+ (100 * 15)
			+ (units - 200)
				* 20;
	}
	else if (units > 300)
	{
		return (100 * 10)
			+ (100 * 15)
			+ (100 * 20)
			+ (units - 300)
				* 25;
	}
	return 0;
}
	