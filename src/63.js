function middle(string){
    if(string.length <3){
        return false;
    }
    else{
        const middleindex = Math.floor(string.length/2);
        return string.slice(middleindex-1,middleindex+2);
    }
}

console.log(middle('gredfasdf'));
