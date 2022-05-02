function check(a,b,c){
    const newa= String(a);
    const newb = String(b);
    const newc = String(c);
    const lasta = newa.charAt(newa.length-1);
    const lastb = newb.charAt(newb.length-1);
    const lastc = newc.charAt(newc.length-1);
    console.log(typeof(newa));
    console.log(typeof(lasta));
    console.log(lastb);
    console.log(lastc);
 if(lasta == lastb == lastc){
     return true;
 }
 else{return false;}
}

// function last_digit(x, y, z)
// {
//   if ((x > 0) && y > 0 && z > 0)
//     {
//      return (x % 10 == y % 10 && y % 10 == z % 10 && x % 10 == z % 10);
//    }
//   else
//     return false;
// }
//can be simpler..but i found it weird..


console.log(check(11,21,431));
console.log(check(42,53,234));