// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


 

// Example 1:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:

// Input: numRows = 1
// Output: [[1]]

function pasCalTriangle(number) {
    //
    let final =[]
    // for(let i = 1;i<number+1;i++){
    //     let temp = []
    //     for(let k = 1;k<i+1;k++){
    //         temp.push(1)
    //     }
    //     final.push(temp)
    // }
    // for(let i = 0;i<final.length;i++){
    //     if(final[i].length > 2 ){
    //         for(let j = 1;j<final[i].length - 1;j++){
    //             final[i][j] = final[i-1][j-1] + final[i-1][j]
    //         }
    //     }
    // }


    for(let i =0;i<=number;i++){
        let rowArr =[]
        for(j = 0;j<=i;j++){
            if(j === 0 || j === i){
                rowArr.push(1)
            }else{
                rowArr.push(final[i-1][j-1] + final[i-1][j])
            }
           
        }
        final.push(rowArr)
    }
    return final[number]
}

console.log(pasCalTriangle(3))