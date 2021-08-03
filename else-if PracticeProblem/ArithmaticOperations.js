"use strict"

//For promting message and taking input from console.
const prompt = require("prompt-sync")({ sigint: true });

//storing user input into variable.
let userNumberOne = prompt("Enter first number : ");
let userNumberTwo = prompt("Enter second number : ");
let userNumberThree = prompt("Enter Third number : ");

let numberOne = + userNumberOne;
let numberTwo = + userNumberTwo;
let numberThree = + userNumberTwo;

let additionMultiplication = numberOne + numberTwo * numberThree;
console.log(additionMultiplication);

let modAddition = numberThree % numberTwo + numberThree;
console.log(modAddition);

let additionDivision = numberOne + numberTwo / numberThree;
console.log(additionDivision);

let multiplicationAddition = numberOne * numberTwo + numberThree;
console.log(multiplicationAddition);

//finding maximum value.
if (additionMultiplication > modAddition && additionMultiplication > additionDivision && additionMultiplication > multiplicationAddition)
{
    console.log("Max Value is : " + additionMultiplication);
}
else if (modAddition > additionDivision && modAddition > multiplicationAddition)
{
    console.log("Max Value is : " + modAddition);
}
else if (additionDivision > multiplicationAddition)
{
    console.log("Max Value is : " + additionDivision);
}
else
{
    console.log("Max Value is : " + multiplicationAddition);
}

//finding minimum value.
if (additionMultiplication < modAddition && additionMultiplication < additionDivision && additionMultiplication < multiplicationAddition)
{
    console.log("Minimum Value is : " + additionMultiplication);
}
else if (modAddition < additionDivision && modAddition < multiplicationAddition)
{
    console.log("Minimum Value is : " + modAddition);
}
else if (additionDivision < multiplicationAddition)
{
    console.log("Minimum Value is : " + additionDivision);
}
else
{
    console.log("Minimum Value is : " + multiplicationAddition);
}