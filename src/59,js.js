function extract(string){
    const newString = string.slice(0,Math.floor(string.length/2));
    return newString;
}

console.log(extract('HelloKitty'));