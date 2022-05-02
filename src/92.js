// Write a JavaScript program to find the maximum difference 
// between any two adjacent elements of a given array of integers.

function find(arr){
    let maxDifference = -1;
    let tempDifference = 0;
    for(let i=0 ; i<arr.length-1 ; i++){
        tempDifference = Math.abs(arr[i]-arr[i+1]);
        maxDifference = Math.max(maxDifference, tempDifference);
        }
    return maxDifference;
}

console.log(find([1,2,3,8,9]));