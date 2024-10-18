// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

// You must do it in place.


// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]
// 1 1 1
// 1 0 1
// 1 1 1  

// Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
// 0 1 2 0
// 3 4 5 2
// 1 3 1 5
// let matrix = [[1,1,1],[1,0,1],[1,1,1]]
var setZeroes = function(matrix) {
    for(let i = 0 ;i < matrix.length;i++){
        for(let j = 0 ;j < matrix[i].length;j++){
            if(matrix[i][j] === 0){
                markCol(j,matrix)
                markRow(i,matrix)
            }
        }
    }
    return turnToZeros(matrix)
};

function turnToZeros(matrix){
    for(let i = 0 ;i < matrix.length;i++){
        for(let j = 0 ;j < matrix[i].length;j++){
            if(matrix[i][j] === -1){
                matrix[i][j] = 0
            }
        }
    }
    return matrix
}

function markRow(row,matrix){
    for(let i = 0;i<matrix[row].length;i++){
        if(matrix[row][i] !== 0){
            matrix[row][i] = -1
        }
    }
}

function markCol(col,matrix){
    for(let i = 0;i < matrix[col].length;i++){
        if(matrix[i][col] !== 0){
            matrix[i][col] = -1
        }
    }
    return matrix
}

console.log(setZeroes([[1,1,1],[1,0,1],[1,1,1]]));