//Write a JavaScript program to check whether a given array of integers represents 
//either a strictly increasing or a strictly decreasing sequence.

function solution(numArr){
    if(numArr.length ==1 ) return true;
    let numDiff = numArr[1] -numArr[0];
    for(let i=0 ; i<numArr.length ; i++){
        if(numDiff*(num[i+1]-num[i]) <= 0) return false;
    }
    return true;
}