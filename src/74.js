//74. Write a JavaScript program to find the larger value between the first or last 
//and set all the other elements with that value. Display the new array

function makeNewArr(arr){
   return arr.fill(Math.max(...arr))
   console.log(...arr)
}

console.log(makeNewArr([50,44,22]));

//...arr 50 44 22