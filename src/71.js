//71. Write a JavaScript program to check whether 1 appears in first or last position of a given array of integers.
// The array length must be greater or equal to 1. 

function check(arr){
    if(arr.length >1){
        const firstitem = arr.shift();
        const lastitem = arr.pop();
        if( firstitem === 1 || lastitem ===1){
            return true;
        }
        else{return arr;}
    }
    return false;
}

console.log(check([1,2,3,4,5]));
console.log(check([3,4,5,9]));


//keep forgetting there's easier way...
function first_last_1(nums)
{
  var end_pos = nums.length - 1;
  return nums[0] == 1 || nums[end_pos] == 1;
}


console.log(first_last_1([1, 3, 5]));
console.log(first_last_1([1, 3, 5, 1]));
console.log(first_last_1([2, 4, 6]));