const HEAD = 1;
const TAIL = 0;

let coinFlip = Math.floor(Math.random() * 10) % 2;

if(HEAD == coinFlip)
{
    console.log("HEAD It is");
}
else
{
    console.log("Tail It is");
}