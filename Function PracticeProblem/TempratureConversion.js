//For promting message and taking input from console.
const prompt = require("prompt-sync")({ sigint: true });

let choice = parseInt(prompt("Enter number as per choice:\n 1 - degF to degC:\n 2 - degC to degF:\n "));

switch(choice)
{
    case 1:
        degFarhenite();
        break;
    case 2:
        degCelsius();
        break;
    default:
        console.log("Invalid Input :");
}

//Function is created to convert the degree celsius to farhenite.
function degFarhenite() 
 {
    let degC = parseInt(prompt("Enter number in a range of 0 to 100 to convert into Farhenite : "));

    if (degC >= 0 && degC <= 100)
     {
         degF = (degC * 9 / 5) + 32;
         console.log("Temp In Farheenite: " + degF)
     } 
     else 
     {
         console.log("Temp Not In Range 0-100 degree Celsius")
     }
 }

 //Function is cretaed to convert degree farhenite to celsius.
 function degCelsius() 
 {
    let degF = parseInt(prompt("Enter number in a range of 32 to 212 to convert into celsius : "));
    
    if (degF >= 32 && degF <= 212) 
     {
         degC = (degF - 32) * 5 / 9;
         console.log("Temp In Celcius: " + degC)
     } 
     else 
     {
         console.log("Temp Not In Range 32-212 degree Farhenite")
     }
 }

