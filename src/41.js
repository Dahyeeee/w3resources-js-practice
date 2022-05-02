function check(a,b,c){
 //   if(a === b === c){
// it doesn't work.... don't know why but it doesn't
     if(a === b && b === c){
        return 30;
    }
    else if(a === b || b ===c || a ===c){
        return 40;
    }
    else{
        return 20;
    }
}

console.log(check(7, 7, 7));
console.log(check(8, 8, 18));
console.log(check(8, 7, 18));