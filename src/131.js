function solution(arr){
    let result= [];
    let temp = 0;
    for(let i=0 ; i<arr.length ; i++){
        temp += arr[i];
        result.push(temp)
    }
    return result;
}

console.log(solution([1,4,5,2,-5,2]))