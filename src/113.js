//Write a JavaScript program to calculate the sum of n + n/2 + n/4 + n/8 +
// .... where n is a positive integer and all divisions are integer.

function solution(num){
    let result = 0;
    while(num>0){
        result += num;
        num = Math.floor(num/2)
    }
    return result;
}

console.log(solution(9))