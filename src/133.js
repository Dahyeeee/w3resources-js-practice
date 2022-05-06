function solution(a, b){
    if(a>b) return 'Improper fraction';
    else return 'Proper fraction'
}

function proper_improper_test(num) {
    return Math.abs(num[0] / num[1]) < 1
      ? "Proper fraction."
      : "Improper fraction.";
  }