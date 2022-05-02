//User-defined variables

const myName='Dahye';
const age = 27;

const infor = {
    [myName]:age,
};

console.log(typeof(infor));
console.log(infor[myName]);

this[myName] = age;

console.log(this[myName]);