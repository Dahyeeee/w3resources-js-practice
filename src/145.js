function solution(n){
    let sum = 0;
    let answer = 0;
    for(let i=1; sum<=n ; i++){
        sum += i;
        answer = i;

    }
    return answer-1;
}

console.log(solution(15))