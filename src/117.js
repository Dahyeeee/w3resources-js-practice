//Write a JavaScript program to check whether a given matrix is an identity matrix.

function solution(arr){
    for(let i =0; i<arr.length ; i++){
        for(let j=0; j<arr.length; j++){
            if(arr[i][j] !==1 && i ===j || arr[i][j]&&i!==j) return false;
        }
    }
    return true;
}