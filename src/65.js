function test(string){
    if(string.length <6){
        return false;
    }
    else if(string.slice(string.length-6)==='String'){
        return true;
    }
}

console.log(test('heString'));
console.log(test('heythere'));