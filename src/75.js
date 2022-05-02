//75. Write a JavaScript program to create a new array taking 
//the middle elements of the two arrays of integer and each length 3

function makeNewArr(arr1,arr2){
    const middleone1 = arr1[1];
    const middleone2 = arr2[1];
    return [middleone1, middleone2];
}

console.log(makeNewArr([1,2,3],[4,5,6]))

function middle_elements(a, b) 
{
  var new_array = []
  new_array.push(a[1], b[1]);

    return new_array;
}