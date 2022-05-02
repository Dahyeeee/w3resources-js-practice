function sum(arr){
    const sumWithInitial = arr.reduce(
        (previousValue,currentValue) => previousValue + currentValue,
        0
    );
        return sumWithInitial;
}

console.log(sum([123,434,234]));