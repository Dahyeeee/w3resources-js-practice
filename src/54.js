function count(string){
    const stringArr = string.split('').filter((item)=>
     {return item === 'e'||item ==='o' || item === 'i' ||item === 'u'})
    return stringArr.length;
}

console.log(count('nicetomeetyou'))

// function vowel_Count(str)
// { 

//   return str.replace(/[^aeiou]/g, "").length; 
// }

// console.log(vowel_Count("Python"));
// console.log(vowel_Count("w3resource.com"));
