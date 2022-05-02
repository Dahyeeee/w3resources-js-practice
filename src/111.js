//Write a JS program to check a number from three given numbers where 
//to numbers are equal, find the thrid one.

function find(arr){
    const sameNum = 0;
    for(let i=1; i<arr.length ; i++){
        if(arr[i]===arr[i-1]) sameNum = arr[i]
        else if(arr[i]===arr[i-2]) sameNum = arr[i-1]
    }
    const answer = arr.filter(a=> a != sameNum).join('');
    return answer? answer : false;
}

console.log(find([1,2,1]))

function find_third_number(x, y, z) {
    if((x!==y) && (x!==z) && (y!==z))
     return "Three numbers are unequal.";
     if(x==y) return z;
     if(x==z) return y;
     return x;
 }