//Write a JavaScript program to find the number 
//which appears most in a given array of integers.

function solution(arr){
    let max =0;
    let num =0;
    arr.forEach(a=>{
        let temp =0;
        for(let i=0; i<arr.length ; i++){
            if(a === arr[i]) temp++
        }
        max = Math.max(temp,max);
    }
}