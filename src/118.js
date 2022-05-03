//118. Write a JavaScript program to check whether a given number is in a given range.

function solution(a,num,b){
    return a<num && num<b
}

console.log(solution(1,2,3),solution(4,8,1))