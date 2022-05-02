// Write a JavaScript program to check whether it is possible to rearrange characters of 
// a given string in such way that it will become equal to another given string.

function check(string1,string2){
    const string1Arr = string1.split('');
    const string2Arr = string2.split('');
    if(string1.length != string2.length){
        return false;
    }
    else if(string1Arr.every((item)=>string2Arr.includes(item))){
        return true;}
    else{
    return false;
    }
}

console.log(check('abc','bac'));