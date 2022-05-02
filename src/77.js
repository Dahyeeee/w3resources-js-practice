//77. Write a JavaScript program to 
//test whether an array of integers of length 2 contains 1 or a 3.

function test(arr){
    if(!arr.some((item)=>item ===1 || item === 3)){
        return true;
    }
    else{return false;}
}

console.log(test([7,5,2]));