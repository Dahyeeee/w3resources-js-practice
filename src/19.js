function check(a,b){
    if((a>=0 && b<0)||(a<0 && b>=0)){
        return true;
    }
    else{return false;}
}

console.log(check(8,9));
console.log(check(-1,9));
console.log(check(9,-8));