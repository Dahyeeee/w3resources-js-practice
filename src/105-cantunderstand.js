//105. Write a JavaScript program to find the number of times to replace a given number 
//with the sum of its digits until it convert to a single digit number

//
function find(num){
    let numArr = String(num).split('');

    function sum(num){
        
    }
}

console.log(find(45));

function digit_to_one(num) {

    const digitSum = num => {

        let digit_sum = 0;
        while (num) {
            digit_sum += num % 10;
            num = Math.floor(num / 10);
        }

        return digit_sum;
    };

    let result = 0;

    while (num >= 10) {
        result += 1;
        num = digitSum(num);
    }

    return result;
}

console.log(digit_to_one(123))
console.log(digit_to_one(156))
