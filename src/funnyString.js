function funnyString(string){
    const stringArr = string.split(' ');
    const singleStringArr = stringArr.map((item)=>item.split(''));
    console.log(singleStringArr);
}

funnyString('hello there')