//Write a JavaScript program to find the smallest prime number strictly greater than a given number.
//i guess this is right way to get prime number
function solution(num){
    for (var i = num + 1;; i++) {
        var isPrime = true;
        for (var d = 2; d * d <= i; d++) {
            if (i % d === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            return i;
        }
    }
}

console.log(solution(26),solution(17))