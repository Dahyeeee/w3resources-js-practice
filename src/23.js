function changeString(string){
    if(string.length<1){
        console.log('too shrot!')
    }
    else{
    const lastCharacter = string.charAt(string.length-1);
    const newString = string.slice(0,string.length-1);
    return newString.padStart(newString.length+1,lastCharacter);
}}

console.log(changeString('Christmas'));
console.log(changeString('ac'));