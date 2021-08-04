"use strict"

//For promting message and taking input from console.
const prompt = require("prompt-sync")({ sigint: true });

//storing user input into variable.
let userNumber = prompt("Enter number between 1 to 7 : ");

//converting string into number type.
let weekNumber = + userNumber;

if(weekNumber == 1)
{
    console.log("ToDay is Sunday");
}
else if(weekNumber == 2)
{
    console.log("ToDay is Monday");
}
else if(weekNumber == 2)
{
    console.log("ToDay is Tuesday");
}
else if(weekNumber == 2)
{
    console.log("ToDay is Wednesday");
}
else if(weekNumber == 2)
{
    console.log("ToDay is Thursday");
}
else if(weekNumber == 2)
{
    console.log("ToDay is Friday");
}
else if(weekNumber == 7)
{
    console.log("ToDay is Saturday");
}
else
{
    console.log("Wrong Input");
}