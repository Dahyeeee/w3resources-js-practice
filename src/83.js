//83. Write a JavaScript to find the longest 
//string from a given array of strings.

function find(arr){
    let max = arr[0].length;
  console.log( arr.map((item)=> max = Math.max(max, item.length)))
    const result = arr.filter((item)=>item.length === max)
    return result;
}

console.log(find(['hey','there','nicetomeetyou','hey']));

// const arr = ["sss", "ddd555555555d", "given string", "test"];
// console.log(
// arr.reduce((init, curr) => (init.length < curr.length ? curr : init))
// );
//이것도 괜찮네