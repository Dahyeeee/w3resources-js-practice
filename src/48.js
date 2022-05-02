function reverse(string){
    const arrString = string.split("");
    console.log(arrString);
    const newString = arrString.reverse();
    return newString.join('');

// return string.split("").reverse().join("");

}

console.log(reverse('Nicetomeetyou'));