//Write a JavaScript program to compute the sum of absolute differences 
//of consecutive numbers of a given array of integers.

function sum(arr){
    const newArr = arr.map((item,index)=>{
       return Math.abs(item-arr[index+1]);
    })
    newArr.pop();
    const resultArr = newArr.reduce((accul,value)=>accul + value,0);
    console.log(resultArr);
}

sum([1,2,3,4,5,9])

function sum2(arr){
    let result = 0;
    for(let i=1; i<arr.length ; i++){
        result += Math.abs(arr[i]-arr[i-1]);
    }
    return result;
}
