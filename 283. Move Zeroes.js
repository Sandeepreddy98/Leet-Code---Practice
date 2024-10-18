// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

 

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

var moveZeroes = function(nums) {
    let nonZeros = []
    let zeros = []
    for(let i = 0;i<nums.length;i++){
        if(nums[i] !== 0){
            nonZeros.push(nums[i])
        }else {
            zeros.push(nums[i])
        }
    }
    return [...nonZeros,...zeros]

    // Here's an in-place solution to move zeroes to the end of the array
    let index = 0
    for(let i = 0;i < nums.length;i++){
        if(nums[i] !==0){
            [nums[index],nums[i]] = [nums[i],nums[index]]
            index++
        }
    }
};

console.log(moveZeroes([0,1,0,3,12]));