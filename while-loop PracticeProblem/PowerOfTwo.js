"use strict"

//For promting message and taking input from console.
const prompt = require("prompt-sync")({ sigint: true });

const base = parseInt(prompt("Enter the base number : "));

let i = 0;
while(i <= 8)
{
    console.log(2 + " to the power of " + i + " is " + Math.pow(base, i));
    i++;
}