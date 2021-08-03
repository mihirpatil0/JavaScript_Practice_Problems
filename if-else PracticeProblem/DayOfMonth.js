"use strict"

//Reading data from console.
const prompt = require("prompt-sync")({ sigint: true });

let month = prompt("Enter Month in Number Format : ");
let date = prompt("Enter date in number format : ");

//converting string type data to number type data.
let monthNumber = + month;
let dateNumber = + date;

//final condition.
if (( (monthNumber <= 6 && dateNumber <= 20) && ((monthNumber >= 3 && dateNumber <= 20) && (dateNumber<31)) ))
{
    console.log("Given date lies between March 20 AND June 20");
}
else
{
    console.log("Given date does not lies between March 20 AND June 20");
}