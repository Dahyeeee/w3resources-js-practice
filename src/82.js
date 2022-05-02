//Write a JavaScript to add two positive integers without carry.

function add(a,b){
    const newA = String(a).split('');
    const newB = String(b).split('');
    let newNum=[]
    for(let i=0; i<3 ; i++){
        newNum.push((Number(newA[i])+Number(newB[i]))%10);
    }
    return newNum.join('');
}

console.log(add(123,548));