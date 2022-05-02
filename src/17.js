function what(num){
    if(num>19){
        return 3*(num-19);
    }
    else{
        return Math.abs(19-num);
    }
}

console.log(what(3));
console.log(what(87));