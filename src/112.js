//Write a Js program to find the number of trailing zeros in the decmial representation 
//of the factorial of a given number.

function solution(num){
    const numArr = [];
    for(let i=1; i<=num; i++){
        numArr.push(i)
    }
    let result = 0;
    let factorial = numArr.reduce((a,b)=>a*b,1);
    while(factorial){
        if(factorial%10 ===0) result++
        else return result;
        factorial = Math.floor(factorial/10)
    }
    return result;
}

console.log(solution(10))