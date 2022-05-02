//Write a JavaScript program to check whether there is 
//at least one element which occurs in two given sorted arrays of integers.

function check(arr1,arr2){
    return arr1.some((item)=>arr2.includes(item))
}

console.log(check([1,2,3],[8,5,3]))
