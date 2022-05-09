function solution(arr){
    const frontPart = arr.slice(0,arr.length/2);
    const backPart = arr.slice(arr.length/2);
    return backPart.concat(frontPart);
}

console.log(solution([1,2,3,4,5,6]))