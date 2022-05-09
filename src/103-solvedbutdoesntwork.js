//Write a JavaScript program to find the maximum number from a given positive integer 
//by deleting exactly one digit of the given number.

function max(num){
    const numArr = String(num).split('');
    console.log(numArr);
    let minimumNum = Number(numArr[0]);
    for(let i=0; i<numArr ; i++){       
       minimumNum = Math.min(minimumNum,Number(numArr[i]));
    }
    console.log(typeof(minimumNum));
    return minimumNum;

    //const newArr = numArr.filter((item)=> item != minimumNum);
    //return newArr.join('');
}

console.log(max(19357));
console.log(max(5229));

