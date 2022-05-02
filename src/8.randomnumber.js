const randomNumber = Math.ceil(Math.random()*10);
console.log(randomNumber);

function guessNumber(yourNumber){
    if (yourNumber === randomNumber){
        console.log ("you got it!");
    }
    else {console.log("Not matched");}
}

guessNumber(3);