// 91. Write a JavaScript program to find the maximum possible 
// sum of some of its k consecutive numbers (numbers that follow each 
// other in order.) of a given array of positive integers.

function find(arr,k){
    let maxSum =0;
    let max = 0;

    for(let i=0; i<arr.length;i++){
        max = arr[i];
        for(let j=i+1; j<k ; j++){
        max += arr[j];
        }
        if(max > maxSum){
            maxSum = max;
        }
    }
    return maxSum;
}

console.log(find([1,2,3,4,5,5],2));