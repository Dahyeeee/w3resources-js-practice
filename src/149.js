function solution(str){
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let newStr = ''
    for(let i=0; i<str.length ; i++){
        if(lowerCase.includes(str[i])) newStr +=str[i].toUpperCase();
        else newStr +=str[i].toLowerCase();
    }
    return newStr;
}

console.log(solution('Germn3ay'))

//if(/[A-Z]/.test(str[i]))