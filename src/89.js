// Write a JavaScript program to check whether it is possible 
// to replace $ in a given expression x $ y = z 
// with one of the four signs +, -, * or / to obtain a correct expression.

// For example x = 10, y = 30 and z = 300, 
// we can replace $ with a multiple operator (*) to obtain x * y = z

function operator(a,b,result){
    if(a + b === result 
     ||a - b === result
     ||a / b === result
     ||a * b === result){
         return true;
     }
}