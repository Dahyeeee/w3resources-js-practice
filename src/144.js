function solution(str){
    const strArr = str.split(/\/+|\:/);
    console.log(strArr)
    return strArr.filter(a => a != '')
}

console.log(solution('https://www.w3resource.com/javascript-exercises/'))