function movechar(string){
    const lastThree = string.slice(string.length-3);
    const remain = string.slice(0,string.length-3);
    if (string <3){
        return string;
    }
    else {return lastThree + remain;}
}

console.log(movechar('nicetomeetyou'))