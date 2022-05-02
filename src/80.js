//80. Write a JavaScript program to swap the first and last elements of 
//a given array of integers. The array length should be at least 1. 

function swap(arr){
    const firstElement = arr[0];
    const lastElement = arr[arr.length-1];
    arr.pop();
    arr.shift();
    arr.push(firstElement);
    arr.unshift(lastElement);
    return arr;
}

console.log(swap([1,2,3]));
console.log(swap([1]));

function swap(arra) {
    [arra[0], arra[arra.length - 1]] = [arra[arra.length - 1], arra[0]];
    return arra;
}