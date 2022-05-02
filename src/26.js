function newLetter(string){
    if(string.length < 3){
        return "I need more than three character."
    }
    else{
    const lastLetters = string.slice(string.length-3);
    const newString = lastLetters + string + lastLetters;
    return newString;
}}

console.log(newLetter('why do you need this function?'));