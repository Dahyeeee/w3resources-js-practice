function check(string){
    const firstLetters = string.slice(0,4);
    if(firstLetters === 'Java'){
        return true;
    }
    else{
        return false;
    }
}

console.log(check('Javascript'));
console.log(check('whatthefuck'));