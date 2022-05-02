function find(a,b){
     if ( (40<=a && 60>=a) && (40<=b && 60>=b)){
    return Math.max(a,b);}
    if(a===b){
        return 'the numbers are same'
    }
    else{
    return 'the numbers should be between 40and 60';}
}

console.log(find(45,55));
console.log(find(1,55));