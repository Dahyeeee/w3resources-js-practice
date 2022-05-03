//Write a JavaScript program to check whether a given integer has an increasing digits sequence.

function solution(num){
    const numString =String(num).split('');
    const numArr = Array.from(numString,Number);
    for(let i=1; i<=numArr.length ; i++){
        if(numArr[i]<numArr[i-1]) return false;
    }
    return true;
}

console.log(solution(123),solution(1289))