//79. Write a JavaScript program to test whether a given array of integers 
//contains 30 and 40 twice. The array length should be 0, 1, or 2.  

function check(arr){
    if(arr.length > 2){
        return false;
    }
    else if(arr.length === 2 && arr.every((item)=> item === 30 || item ===40)){
        return true;
    }
    else{return false;}
    }


console.log(check([30,30]))
console.log(check([40,40]))
console.log(check([30,50]))