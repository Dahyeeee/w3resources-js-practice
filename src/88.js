// Write a JavaScript program to check whether two given integers are similar or not,
//  if a given divisor divides both integers and it does not divide either.

function check(a,b,divisor){
    const resulta = a % divisor === 0;
    const resultb = b % divisor === 0;
    if(resulta === resultb) {
        return true;
    }
    else{
        return false;
    }
}

console.log(check(12,50,3));