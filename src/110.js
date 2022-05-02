//Write a JavaScript program to find the number of even values 
//in sequence before the first occurrence of a given number.

function find(arr, num){
    const newArr =arr.sort().filter((item)=> item < num);
    const result = newArr.find((item)=>item%2 ===0);
    if (result === undefined){
        return 0;
    }
    else{
        return result;
    }
}

console.log(find([2,3,4,5,2,1,4],3));
console.log(find([9,8,15,1,3],7));