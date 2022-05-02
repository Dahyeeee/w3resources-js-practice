function range(a,b){
    if((a >=50 && a <= 90) || (b >=50 && b <= 90)){
        return true;
    }
    else{
        return false;
    }
}

console.log(range(85,12));
console.log(range(1,2));
console.log(range(2,55));