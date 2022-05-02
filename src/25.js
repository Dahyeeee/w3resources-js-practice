function check(num){
    if(num%3===0 || num%7===0){
        return true;
    }
    else{ return false;}
}

console.log(check(324));
console.log(check(14));
console.log(check(8));