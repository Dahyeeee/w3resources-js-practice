//107. Write a JavaScript program to find the number of sorted pairs formed by its elements of a 
//given array of integers such that one element in the pair is divisible by the other one. 

function find(arr){
    let pairNumber = 0;
    for(let i =0; i<arr.length; i++){
        for(let j =i+1; j<arr.length; j++){
            if(arr[j] % arr[i]===0){
                pairNumber +=1;
            }
        }
    }
    return pairNumber;
}

console.log(find([1,3,2]));
console.log(find([2,4,16]));

