function solution(str){
    let num = str.replaceAll(/\D+/g,'');
    let numArr = num.split('');
    return numArr.reduce((a,b)=> +a + +b,0)
}

console.log(solution('abdhf342df3'))