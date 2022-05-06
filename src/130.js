function solution(num){
    let newNum = String(num);
    let result=[]
    for(let i=0 ; i <newNum.length ; i++){
        if(+newNum[i]%2===0) result.push(newNum[i])
    }
    return result.length
}

console.log(solution(458231))