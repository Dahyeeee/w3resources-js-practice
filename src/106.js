//Write a JavaScript program to divide an integer by another integer as long as 
//the result is an integer and return the result.

function divide(num1, num2){
    if(num1%num2 != 0){
        return num1;
    }
    else{
        return num1/num2;
    }
}

console.log(divide(34,2));
console.log(divide(-12,3))

//Number.isInteger(a)