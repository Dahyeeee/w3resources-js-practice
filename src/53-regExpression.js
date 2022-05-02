function check(string){
    const aposition = string.indexOf('a');
    const bposition = string.indexOf('b');
    if (Math.abs(aposition - bposition) === 4 ){
        return true;
    }
    else{return false;
}}

console.log(check('ahsdjhfkjb'));
console.log(check('bojpabbcsdf'));

function ab_Check(str)
 {
    return (/a...b/).test(str) || (/b...a/).test(str);
 }

console.log(ab_Check("Chainsbreak"));
console.log(ab_Check("pane borrowed"));
console.log(ab_Check("abCheck"));

//regular expression 정규표현식