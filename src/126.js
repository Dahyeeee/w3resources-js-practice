//126. Write a JavaScript program to get the largest even number from an array of integers

function solution(arr){
    const newArr =arr.filter(a => a%2 ===0)
    return Math.max(...newArr);
}