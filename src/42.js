function check(a,b,c){
    if(a < b && b < c){
        return 'strict mode';
    }
    else if(c > b){
        return 'soft mode';
    }
    else{
        return 'undifined'
    }
}

console.log(check(10,15,31));
console.log(check(24,22,31));
console.log(check(50,21,15));