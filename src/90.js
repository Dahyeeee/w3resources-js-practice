//Write a JavaScript program to find 
//the kth greatest element of a given array of integers.

function findNumber(arr, k){
    const noSameNumber = [...new Set(arr)];
    console.log(noSameNumber);
    const newArr = noSameNumber.sort().reverse();
    return newArr[k-1];
}

console.log(findNumber([2,46,7,53,53,66,321],4));
