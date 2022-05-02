function sliceString(string){
    const newString = string.slice(2,9);
    const newString2 = string.substr(2,9);
    const newString3 = string.substring(2,9);
    //substring은 slice랑 똑같지만 nagative는 받지 않음
    //slice, substring 의 두번째 인덱스는 포함되지 않음.
    return `${newString}  ${newString2} ${newString3}`
}

console.log(sliceString('heymynameisdahyenicetomeetyou.'))