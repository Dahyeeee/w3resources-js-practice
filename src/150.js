function solution(arr){
    if(arr.length %2 != 0) return false;
    const newArr = [];
    for(let i=1; i<arr.length ; i += 2){
        newArr.push(arr[i]);
        newArr.push(arr[i-1]);
    }
    return newArr;
}

console.log(solution([1,2,3,4,45,6]))