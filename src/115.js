//Write a JavaScript program to check whether a matrix is a diagonal matrix or not. In linear algebra,
// a diagonal matrix is a matrix in which the entries outside the main diagonal are all zero 
//(the diagonal from the upper left to the lower right).

function is_diagonal_matrix(user_matrix) {
    for (var i = 0; i < user_matrix.length; i++) {
        for (var j = 0; j < user_matrix.length; j++) {
            if (i !== j && user_matrix[i][j] !== 0) 
              return false;
        }
    }
    return true;
}