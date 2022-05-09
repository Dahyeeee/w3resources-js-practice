function solution(arr1, arr2){
    let result = 0;
    arr1.forEach(a =>{
        if (arr2.includes(a)) result++
    })
    return result;
}

console.log(solution([1,2,3,4],[4,2,3,1]))