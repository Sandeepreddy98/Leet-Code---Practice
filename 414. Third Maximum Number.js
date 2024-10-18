// Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.

 

// Example 1:

// Input: nums = [3,2,1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2.
// The third distinct maximum is 1.

function thirdMax(nums){
    let sortedArray = nums.sort((a,b) => a-b)
    let sortedObject = {}
    for(let i = 0;i < sortedArray.length;i++){
        if(!sortedObject[sortedArray[i]]){
            sortedObject[sortedArray[i]] = 1
        }else{
            sortedObject[sortedArray[i]] = sortedObject[sortedArray[i]] + 1
        }
    }
    if(nums.length){

    }
}