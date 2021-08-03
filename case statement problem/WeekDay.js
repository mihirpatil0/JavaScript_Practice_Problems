"use strict"

//For promting message and taking input from console.
const prompt = require("prompt-sync")({ sigint: true });

let userNumber = prompt("Enter number between 1 to 7 : ");

let number = + userNumber;

switch (number)
{
    case 1:
        console.log("Today is Monday.");
        break;
    case 2:
        console.log("Today is Tuesday.");
        break;
    case 3:
        console.log("Today is Wednesday.");
        break;
    case 4:
        console.log("Today is Thursday.");
        break;
    case 5:
        console.log("Today is Friday.");
        break;
    case 6:
        console.log("Today is Saturday.");
        break;
    case 7:
        console.log("Today is Sunday.");
        break;
    default:
        console.log("Wrong input");
}