function creatCopiesOfString(string, num){
    const stringarr = string.split('');
    const copiedarr = [];
    for (i =0; i< string.length*num ; i++){
        copiedarr[i] = stringarr[i%string.length]
    }
    return copiedarr.join('');
}

console.log(creatCopiesOfString('hello',5));

//repeat이라는 method가 있네 ^^^^
function string_copies(str, n ){
    if(n<0){
        return false;
    }
    else{return str.repeat(n);}
}

console.log(string_copies("abc", 5));
console.log(string_copies("abc", 0));
console.log(string_copies("abc", -2));