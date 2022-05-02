// Write a JavaScript program to check whether two arrays of
//  integers of same length are similar or not. The arrays will be similar 
//  if one array can be obtained from another array by swapping at most one pair of elements.

function check(arr1,arr2){
    return arr1.every((item)=> arr2.includes(item))
}

console.log(check([1,2,3],[1,2,3]));
console.log(check([1,2,3],[1,3,2]));
console.log(check([1,2,3],[1,4,3]));

function array_checking(arra1, arra2) {

    for(var i = 0; i < arra1.length; i++) {
      for(var j = i; j < arra1.length; j++) {
        var result = true,
        //왜 이러는 거야?
          temp = arra1[i];
        arra1[i] = arra1[j];
        arra1[j] = temp;
        for(var k = 0; k < arra1.length; k++) {
          if(arra1[k] !== arra2[k]) {
            result = false;
            break;
          }
        }
        if(result) {
          return true;
        }
        arra1[j] = arra1[i];
        arra1[i] = temp;
      }
    }
    return false;
  }