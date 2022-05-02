//81. Write a JavaScript program to add 
//two digits of a given positive integer of length two.

function add(num){
    let a = num % 10;
    let b = Math.floor(num/10);
    return a + b;

}

console.log(add(83));

function addup(num){
    const newNumber = (''+num).split('');
    return newNumber.reduce((sum,val)=>sum+val,0);
}

console.log(addup(11));