"use strict"

//For promting message and taking input from console.
const prompt = require("prompt-sync")({ sigint: true });

let userNumber = prompt("Enter number to check if number is prime or not : ");
let userInputNumber = + userNumber;

let isPrimeNumber = true;

//checking if user input number is 0 or 1.
if(userInputNumber <= 0 || userInputNumber == 1)
{
    console.log(userInputNumber + " is not a prime number");
}
else
{
    //loop will start to run from 2 till half range of a given number because if we keep on dividing it it will give float value.
    for(let i = 2; i <= userInputNumber / 2; i++)
    {
        if(userInputNumber % 2 == 0)
        {
            isPrimeNumber = false;
            break;
        }
            
    }
}
if(!isPrimeNumber)
{
    console.log(userInputNumber + " is not a prime number.");
}
else
{
    console.log(userInputNumber + " is a prime number.");
}