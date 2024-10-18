// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

 

// Example 1:

// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
// Example 2:

// Input: nums = [5], k = 1
// Output: 5.00000

function MaxAvgSubArr(nums,k){
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        let val = nums.slice(i,i+k)
        if(val.length !== k){
            break
        }
        let valsum =0
        for(let j = 0 ;j <val.length;j++){
            valsum = valsum + val[j]
        } 
        if(sum < valsum){
            sum = valsum
        }
    }

    return sum/k
}

console.log(MaxAvgSubArr([1,12,-5,-6,50,3],4))
console.log(MaxAvgSubArr([5],1))