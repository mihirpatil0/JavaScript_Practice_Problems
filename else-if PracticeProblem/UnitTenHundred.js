"use strict"

//For promting message and taking input from console.
const prompt = require("prompt-sync")({ sigint: true });

//storing user input into variable.
let userNumber = prompt("Enter number like 1,10,100,1000......100000000: ");

let number = + userNumber;

//Printing according to number
if (number == 1)
{
    console.log("Units");
}
else if (number == 10)
{
    console.log("Ten's");
}
else if (number == 100)
{
    console.log("Hundred's");
}
else if (number == 1000)
{
    console.log("Thousand's");
}
else if (number == 10000)
{
    console.log("Ten Thousand's");
}
else if (number == 100000)
{
    console.log("Lakh's");
}
else if (number == 1000000)
{
    console.log("Ten Lakh's");
}
else if (number == 10000000)
{
    console.log("Crore's");
}
else if (number == 100000000)
{
    console.log("Ten Crore's");
}
else
{
    console.log("Invalid Number");
}