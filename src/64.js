function concat(str1, str2){
    const string1length = str1.length;
    const string2length = str2.length;
    if(string1length === string2length){
        return str1 + str2;
    }
    else if(string1length > string2length){
        const newstr1 = str1.slice(0,string2length);
        return newstr1 + str2;}
    else if(string1length<string2length){
        const newstr2 = str2.slice(0,string1length);
        return str1 +newstr2;
    }
    }

console.log(concat('hey','whatup'));
console.log(concat('nicetomeetyou','areyouha'));

function str_con_cat(str1, str2) {
    const m = Math.min(str1.length, str2.length);
  
    return str1.substring(str1.length - m) + str2.substring(str2.length - m);
  }
  
  console.log(str_con_cat("Python", "JS"));
  console.log(str_con_cat("ab", "cdef"));