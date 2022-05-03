//Write a JavaScript program to find whether the members of a given array of integers is a permutation of numbers from 1 to a given integer.

function solution(arr,n){
    for(let i=0; i<n ; i++){
        //해당숫자가 있는지 보는 방법. -1이면 배열안에 없는 것
        if(arr.indexOf(i+1)<0) return false;
    }
    return true;
}
