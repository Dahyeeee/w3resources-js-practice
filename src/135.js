function solution(str){
    const repeated =[];
    for(let i =0 ; i<str.length ; i++){
        for(let j=i+1 ; j<str.length ; j++){
            if(str[i]===str[j]) repeated.push(str[i])
        }
    }
    console.log(repeated)
    for(every of repeated){
        str = str.replaceAll(every, '')
    }
    return str;
}

console.log(solution('ehuuundcc'))

//오 신박한데? for문 안돌리고 좋은데? 
function remove_duplicate_cchars(str) {
    var arr_char = str.split("");
    var result_arr = [];
  
    for (var i = 0; i < arr_char.length; i++) {
      if (str.indexOf(arr_char[i]) === str.lastIndexOf(arr_char[i]))
        result_arr.push(arr_char[i]);
      }
  
    return result_arr.join("");
  }