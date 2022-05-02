function creatNew(string, num){
    if(string.length < num){
        return false;
    }
    else{
    const firstLetter = string.slice(0,num);
    const lastNLetter = string.slice(string.length-num);
     return firstLetter+lastNLetter;
    }
}

console.log(creatNew('Nicetomeetyou',15));