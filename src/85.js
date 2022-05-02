//Write a JavaScript code to divide a given array of positive integers into
//two parts. First element goes to first part,
// second element goes to second part, and third element goes to first part and so on.
//Now compute the sum of two parts and store into an array of size two.

function creatNew(arr){
    const firstNewArr = arr.filter((item,index)=> index%2 === 0);
    const secondNewArr= arr.filter((item,index)=> index%2 !== 0);
    const sumOfFirst = firstNewArr.reduce((sum, val)=> sum+val,0);
    const sumOfSecond = secondNewArr.reduce((sum, val)=>sum + val, 0);
    const newArr =[]
    newArr.push(sumOfFirst);
    newArr.push(sumOfSecond);
    return newArr;
}

console.log(creatNew([1,2,3,4]));

function alternateSums(arr){
    let result = [0,0];
    for( let i=0 ; i<arr.length ; i++){
        if(i%2) result[1] += arr[i];
        else
            result[0] += arr[i];
    }
    return result;
}

console.log(alternateSums([1,2,3,4,3,2]))