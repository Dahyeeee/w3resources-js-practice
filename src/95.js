//95. Write a JavaScript program to replace all the numbers 
//with a specified number of a given array of integers.

function replace(arr,replacedNumber, replacingNumber){
    const newArr = arr.map((item)=>{
        if(item === replacedNumber){
            item = replacingNumber;
            return item;
        }
        else{ return item;}
    });
    //arr.map((item)=> (item === replacedNumber) ? replacingNumber : item);
    return newArr;
}

console.log(replace([1,2,3,4,5],2,9));