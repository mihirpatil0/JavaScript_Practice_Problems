function factorial(n){
    //base case
    if(n == 0 || n == 1){
        return 1;
    //recursive case
    }else{
        return n * factorial(n-1);
    }
}

//For promting message and taking input from console.
const prompt = require("prompt-sync")({ sigint: true });

// take input from the user
const factNumber = parseInt(prompt('Enter lower number: '));

answer = factorial(factNumber)
console.log("The factorial of " + factNumber + " is " + answer);