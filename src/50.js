function change(string){
    const stringArr = string.split(' ');
    const stringArr2 = stringArr.map(element => {
        const firstLetter = element.charAt(0).toUpperCase();
        const newElement = element.replace(element[0],firstLetter);
        return newElement;
    })
    return stringArr2.join(' ');
}

console.log(change(`its great to see you everyone.`))

// function capital_letter(str) 
// {
//     str = str.split(" ");

//     for (let i = 0, x = str.length; i < x; i++) {
//         str[i] = str[i][0].toUpperCase() + str[i].substr(1);
//     }

//     return str.join(" ");
// }

// console.log(capital_letter("Write a JavaScript program to capitalize the first letter of each word of a given string."));