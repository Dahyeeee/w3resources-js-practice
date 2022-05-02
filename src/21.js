const heya ="thon"

function py(givenStirng){
    if(givenStirng.substring(0,2)=== 'Py'){
        return givenStirng;
    }
    else{return 'Py'+givenStirng;}
}

console.log(py('hello'));
console.log(py('Pying'));