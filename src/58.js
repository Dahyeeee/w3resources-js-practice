function copyLastThree(string){
    const lastThree = string.slice(string.length-3);
    if(string.length <3){
        return false;
    }
    else{
        return lastThree.repeat(4);
    }
}

console.log(copyLastThree('hello'));
console.log(copyLastThree('ki'));