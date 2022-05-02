//93. Write a JavaScript program to find the maximal difference 
//among all possible pairs of a given array of integers

function find(arr){
    let max =0;
    for (let i =0; i<arr.length; i++){
        for(let j = 0; j != i && j<arr.length; j++){
          let tempMax =  Math.abs(arr[i]-arr[j]);
           max = Math.max(tempMax,max);
        }
    }
    return max;
}

console.log(find([1,2,3,4,5,9]))