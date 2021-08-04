//For promting message and taking input from console.
const prompt = require("prompt-sync")({ sigint: true });

let number = parseInt(prompt("Enter number to check if it is palindrome or not : "));

function palindrome(num) 
{
    const NUMBER = num;
    var reverse = 0;
    var a = 0;
    /**
     * lopp is continued untill number is equal to 0 or less then 0
     */
    while (num > 0)
    {
        a = num % 10;
        num = parseInt(num / 10);
        reverse = reverse * 10 + a;
    }
    console.log("Reverse Number is: "+reverse)

    /**
     * Check whether number is equal to reverse or not
     */
    if  (NUMBER == reverse)
    {
        return console.log("Number is palindrome");
    }
    else
    {
        return console.log("Number is not palindrome");
    }
}

let output = palindrome(number);
console.log(output);