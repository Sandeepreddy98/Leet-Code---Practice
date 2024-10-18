// Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

 

// Example 1:

// Input: nums = [1,2,3]
// Output: 6
// Example 2:

// Input: nums = [1,2,3,4]
// Output: 24
// Example 3:

// Input: nums = [-1,-2,-3]
// Output: -6

var maximumProduct = function(nums) {
    let sorted = nums.sort((a,b) => a-b)
    let prod1 = sorted[sorted.length - 1] * sorted[sorted.length - 2] * sorted[sorted.length - 3]
    let prod2 = sorted[0] * sorted[1] * sorted[sorted.length - 1]
    return Math.max(prod1,prod2)
};

console.log(maximumProduct([-100,-98,-1,2,3,4]));