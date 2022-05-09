function solution(arr){
    let result =0
    arr.forEach((a,ind)=>{
        if(a%10 === 0) result = ind
    })
    return result;
}