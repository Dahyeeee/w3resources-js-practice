function creatNew(string){
    const firstLetter = string.charAt(0);
    const lastLetter = string.charAt(string.length-1);
    if(firstLetter === 'P' || lastLetter =="P"){
        return string.slice(1,string.length-1);
    }
    else{
        return string;}
}

console.log(creatNew('Pigherehere'));
console.log(creatNew('notathing'));
console.log(creatNew('thereyougoP'));