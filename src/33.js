function check(a,b){
    if( (a>=40 && a<=60 || a>=70 && a<=100)&&
        (b>=40 && b<=60 || b>=70 && b<=100)){
            return true;
        }
    else{return false;}
}

console.log(check(55,45));
console.log(check(1,55));