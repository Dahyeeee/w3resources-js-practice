//Write a JavaScript program to find two elements of the array such that their absolute difference is 
//not greater than a given integer but is as close to the said integer.

function find(arr,num){
    const newArr = [];
    for(let i = 0; i<arr.length-1 ;i++){
        for(let j =1; j<arr.length ; j++){
            newArr.push(Math.abs(arr[j]-arr[i]))
        }
    }
    const smallerThan = newArr.filter((item)=> item < num);
    console.log(smallerThan);
    let gap = smallerThan[0];
    for(number of smallerThan){
        if(Math.abs(num-number)<gap){
            gap = number;
        }
     }
     return gap;
    }

console.log(find([1,4,8],5))

function different_values(ara, n) {
    var max_val = -1;
    for (var i = 0; i < ara.length; i++) {
        for (var j = i + 1; j < ara.length; j++) {
            var x = Math.abs(ara[i] - ara[j]);
            if (x <= n) {
                max_val = Math.max(max_val, x)
            }
        }
    }
    return max_val
}
console.log(different_values([12, 10, 33, 34], 10));
console.log(different_values([12, 10, 33, 34], 24));
console.log(different_values([12, 10, 33, 44], 40));
