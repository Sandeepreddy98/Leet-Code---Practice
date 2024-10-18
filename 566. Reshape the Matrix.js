// In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into a new one with a different size r x c keeping its original data.

// You are given an m x n matrix mat and two integers r and c representing the number of rows and the number of columns of the wanted reshaped matrix.

// The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were.

// If the reshape operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.

 

// Example 1:


// Input: mat = [[1,2],[3,4]], r = 1, c = 4
// Output: [[1,2,3,4]]
// Example 2:


// Input: mat = [[1,2],[3,4]], r = 2, c = 4
// Output: [[1,2],[3,4]]

var matrixReshape = function(mat, r, c) {
    let arr = []
    for(let i =0 ;i < mat.length;i++){
        for(let j = 0;j<mat[i].length;j++){
            arr.push(mat[i][j])
        }
    }
    if(mat.length * mat[0].length !== c*r){
        return mat
    }
    let finalArr =[]
    for(let i = 0 ;i<r;i++){
        let row = []
        for(let j = 0;j < c ;j++){
            const col = arr.shift()
            row.push(col)
        }
        finalArr.push(row)
    }
    return finalArr
};

console.log(matrixReshape([[1,2],[3,4]],4,1));


