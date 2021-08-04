const HEAD = 1;

 let headCount = 0;
 let tailCount = 0;

while((headCount <= 11) && (tailCount <= 11))
{
    let coinToss = Math.floor(Math.random() * 10) % 2;
    if(coinToss == HEAD)
    {
        headCount ++;
    }
    else
    {
        tailCount ++;
    }
}

if(headCount == 11)
{
    console.log("HEAD Wins.");
}
else
{
    console.log("TAIL Wins.")
}
