//Write a JavaScript program to sort an array of all prime numbers between 1 and a given integer.

function sort(num){
    let sortedNumber =[];
    for(let i=2 ; i<=num ; i++){
        if(isPrime(i)) sortedNumber.push(i)
    }
    
    

    function isPrime(x){
        if(x==2) return true;
        for(let i=2 ; i*i<=x ; i++){
            if(x%i == 0) return false;
        }
        return true;
    }

    return sortedNumber;
}

console.log(sort(34))