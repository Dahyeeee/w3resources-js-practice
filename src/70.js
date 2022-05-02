// 70. Write a JavaScript program to rotate the elements left of a given
// array of integers of length 3.

function rotate(arr){
    const firstItem = arr.shift();
    arr.push(firstItem);
    return arr;    
}

console.log(rotate([12,23,43]));