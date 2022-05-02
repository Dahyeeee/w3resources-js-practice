function find(a,b){
    const differa = Math.abs(100 - a);
    const differb = Math.abs(100 - b);
    if(differa > differb){
        return b
    }
    if(differa < differb){
        return a
    }
    if(differa === differb){
        return 'they are same numbers'
    }
}

console.log(find(45,97));
console.log(find(77,5));
console.log(find(-45,-55));
console.log(find(55,55));