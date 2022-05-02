function check(a,b){
    return (a === 8 || b === 8 || a+b ===8 || Math.abs(a-b) ===8);
}

console.log(check(8,5));
console.log(check(3,5));
console.log(check(7,7));

// function check8(x, y) {
//     if (x == 8 || y == 8) {
//       return true;
//     }
  
//     if (x + y == 8 || Math.abs(x - y) == 8)
//     {
//       return true;
//     }
  
//     return false;
//   }
//내 코드보다 이게 더 효울적임? 