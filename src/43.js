function check(a,b,c){
    return  (a % 10 === b % 10)||
            (b % 10 === c % 10)||
            (a % 10 === c %10);
}

console.log(check(11,21,351));
console.log(check(51,55422,51));
console.log(check(424,32,3521));

//숫자는 10, 100으로 나눠서 나머지를 얻는 방법을 자주 쓰는구만.