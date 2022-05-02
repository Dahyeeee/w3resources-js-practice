function concat(str1, str2){
    const newstr1 = str1.slice(1);
    const newstr2 = str2.slice(1);
    return newstr1 + newstr2;
}

console.log(concat('hey','there'))