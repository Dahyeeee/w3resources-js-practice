function sameLetter(string){
    const firstletter = string.charAt(0);
    //const newString = string.padEnd(string.length+1,firstletter).padStart(string.length+2,firstletter);
    const newString = firstletter + string +firstletter;
    return newString;
}

console.log(sameLetter('heynicetomeetyou'));