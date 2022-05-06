function change_char(str){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const strArr = str.split('');
    const result = strArr.map(a =>{
        const index = alphabet.indexOf(a);
        a = alphabet[alphabet.length-1 - index];
        return a;
    })
    return result.join('')
}

console.log(change_char("abcxyz"));
console.log(change_char("python"));