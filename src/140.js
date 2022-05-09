function solution(num){
    const numArr = String(num).split('');
    console.log(numArr)
    let result = true;
    for(let i =1; i<numArr.length ; i++){
        if(numArr[i]!==numArr[i-1]){
             result = false;
             break;
        }
    }
    return result;
}

console.log(solution(447))