function convert(num){
    let hours = Math.floor(num/60);
    let mintues = num % 60 ;
    if (mintues <10){
        mintues = '0'+mintues;
    }
    return `${hours} : ${mintues}`;

}

console.log(convert(456));