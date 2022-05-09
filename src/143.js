function soltuion(arr){
    arr.sort((a,b)=> b.length - a.length);
    return arr
}

console.log(soltuion(['hi','good','to','see','you','welcome']))