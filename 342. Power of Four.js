// Given an integer n, return true if it is a power of four. Otherwise, return false.

// An integer n is a power of four, if there exists an integer x such that n == 4x.

 

// Example 1:

// Input: n = 16
// Output: true

function powerOfFour(n){
    if(n <= 0){
        return false
    }
    while(n > 1){
        if(n % 4 !== 0){
            return false
        }
        n = n/4
    }
    return true
}

console.log(powerOfFour(12));