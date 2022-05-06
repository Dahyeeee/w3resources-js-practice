function prime_factors(num){
    let factors =[];
    for(let i =1 ; i*i<=num ; i++){
        if(num%i ===0) {
            factors.push(i);
            factors.push(num/i)
    }}
    console.log(factors)
    let result = factors.filter(a=>{
        if(a===1) return false;
        if(a===2) return true;
        for(let i=2 ; i*i<=a ; i++){
            if(a%i === 0) return false;
        }
        return true;
        }
    )
    return result;
}

console.log(prime_factors(100));
console.log(prime_factors(101));
console.log(prime_factors(103));
console.log(prime_factors(104));
console.log(prime_factors(105));