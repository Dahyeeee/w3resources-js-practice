//114. Write a JavaScript program to check whether a given string represents a correct sentence or not. A string is considered correct sentence 
//if it starts with the capital letter and ends with a full stop (.)

function check(str){
    const cap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    //[A-Z].test(str[0]) ㅎㅎ정규표현식
    if(cap.includes(str[0]) && str[str.length-1]==='.') return true;
    else return false;
}

console.log(check('Hello.'), check('hi.'))