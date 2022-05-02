//84. Write a JavaScript to replace each character of
// a given string by the next one in the English alphabet.

function replace(string){
    const stringArr = string.split('');
    for(let i =0; i< stringArr.length ; i++){
        let n = stringArr[i].charCodeAt() - 'a'.charCodeAt();
        n = (n+1) % 26;
        stringArr[i] = String.fromCharCode(n + 'a'.charCodeAt());
    }
    return stringArr.join('');
}

replace('string');

console.log('Z'.charCodeAt());
console.log('A'.charCodeAt());
console.log('B'.charCodeAt());
console.log('C'.charCodeAt());
console.log('D'.charCodeAt());
