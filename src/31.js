function find(a,b,c){
    return Math.max(a,b,c);
}

console.log(find(12,51,1));
console.log(find(55,78,11));

//function max_of_three(x, y, z) 
//  {
//     max_val = 0;
//     if (x > y)
//     {
//       max_val = x;
//     } else
//     {
//       max_val = y;
//     }
//     if (z > max_val) 
//     {
//       max_val = z;
//     }
//     return max_val;
//   }
// 이렇게 하면 data structure나 알고리즘이 더 빠른가? Big O가 더 좋은가?