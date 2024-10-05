// Challenge: Write a JavaScript function named sumMatrixDiagonals that calculates the sum
// of the diagonals in a square matrix.

// Requirements:

// The function should take a square matrix (an array of arrays) as an argument.

// The function should return an object with two properties: primaryDiagonal and secondaryDiagonal,
//  each representing the sum of the primary and secondary diagonals, respectively.

// Details:

// Primary Diagonal: The diagonal that runs from the top-left corner to the bottom-right corner.
// Secondary Diagonal: The diagonal that runs from the top-right corner to the bottom-left corner.


function sumMatrixDiagonals(matrix) {
    let primaryDiagonal = 0;
    let secondaryDiagonal = 0;
    let n = matrix.length; // Since it's a square matrix, the length of one side is the length of the matrix

    for (let i = 0; i < n; i++) {
        primaryDiagonal += matrix[i][i]; // Sum the primary diagonal elements
        secondaryDiagonal += matrix[i][n - 1 - i]; // Sum the secondary diagonal elements
    }

    return { primaryDiagonal, secondaryDiagonal };
}


console.log(sumMatrixDiagonals([[1,2,3],[4,5,6],[7,8,9]]))