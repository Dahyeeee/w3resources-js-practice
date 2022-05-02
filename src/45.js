function check(a,b){
    return a === 15 ||
           b === 15 ||
           a +b === 15 ||
           Math.abs(a-b) === 15;
}

console.log(check(15,28));
console.log(check(7,8));
console.log(check(30,15));
console.log(check(78,45));