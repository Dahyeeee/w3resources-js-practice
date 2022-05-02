
function CtoF(c){
    const f = 9*c/5 + 32;
    console.log(`${c}\xB0C is ${f}\xB0F`);
}

CtoF(60);

function FtoC(f){
    const c = 5*(f-32)/9;
    console.log(`${f}\xB0F is ${c}s2\xB0C`);
}

FtoC(45)

//unicode for temperatures
//섭씨 \xB0C
//화씨 \xB0F