//125. Write a JavaScript program to find the longest string from a given array.

function solution(arr){
    let result =''
    let temlong =0
    for(let i=0; i < arr.length ; i++){
        if(temlong<arr[i].length) {
            temlong = arr[i].length;
            result = arr[i];
        }
    }
    return result;
}

console.log(solution(['a','ab','dfhe','d']))