function check(string,char){
    const forchecking = string.charAt(1);
    const forchecking2 = string.charAt(2);
    const forechecking3 = string.charAt(3);
    if(string.length<4){
        return "it's not long enough."
    }
    if(forchecking === char|| forchecking2 ===char || forechecking3 === char){
        return true;
    }
    if(char.length !== 1){
        return 'just one character.'
    }
    else{
        return false;
    }
}
// (function() {
//     "use strict";
//     function check_char(str1, char)
//      { ctr = 0;
//       for (let i = 0; i < str1.length; i++)
//       {
//         if ((str1.charAt(i) == char) && (i >= 1 && i <= 3))
//         {
//             ctr=1;
//             break;
//         }
//        }
//        if (ctr==1) return true;
//        return false;
//     }
// ??????????? i don't understand this logic

console.log(check('heynicetomeetyou','e'))
console.log(check('ineedyou','y'));
console.log(check('ineedyou','yd'));