//116.Write a JavaScript program to find all the possible options to replace the hash in a string (Consists of digits and one hash (#))
// with a digit to produce an integer divisible by 3.

function solution(str){
    let result = []
    for(let i=0 ; i<10 ; i++){
        let replaced = str.replace('#',i)
        if(+replaced %3 ===0 ) result.push(replaced)
    }
    return result;
}

console.log(solution("2#0"),solution('4#2'))