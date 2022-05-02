function replace(string){
    const alphabet = [...'abcedfghijklmnopqrstuvwxyz'];
    const stringArr = string.split('');
    console.log(stringArr);
    const newString = stringArr.map((string)=>{
            for(i=0; i <alphabet.length; i++){    
            if(string === alphabet[i]){
                return string = alphabet[i+1]
            }}})
        return newString.join('');
        }

console.log(replace('whattheheell'))