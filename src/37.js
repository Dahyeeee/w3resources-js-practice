function change(string){
    if(string.length <3){
        return string.toUpperCase();
    }
    else{
        const newString = string.slice(0,3).toLowerCase();
        const newString2 = string.slice(3);
        return newString + newString2;
    }
}

console.log(change('HIEEveryone, Its Danny here'));