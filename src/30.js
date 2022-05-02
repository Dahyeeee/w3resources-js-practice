function wierd(string){
    const taken = string.slice(4,10);
    if(taken === 'Script'){
        const newString = string.replace("Script","");
        return newString;
    }
    if(string.length <6 ){
        return string;
    }
    else{return string;}
}

console.log(wierd("this is so weird!"));
console.log(wierd("hhhhScripthhhhh"));