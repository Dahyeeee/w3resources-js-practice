//76. Write a JavaScript program to create a new array taking the first and last elements from a given array
// of integers and length must be greater or equal to 1.

function makeNewArr(arr){
    const newArr =[];
    newArr.push(arr[0],arr[arr.length-1]);
    return newArr;
}

console.log(makeNewArr([2,3,4,5]))