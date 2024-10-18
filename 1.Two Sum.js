/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
*/
// nested for loop - 0(n^2)
// function twoSum(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i,j];
//       }
//     }
//   }
// }
//Using for loop - O(n)
function twoSum(nums, target) {
 let numbers = {}
 for(let i = 0 ;i < nums.length;i++){
  let minusValue = target - nums[i]
  if(numbers[minusValue]){
    return [numbers[minusValue],i]
  }
  numbers[nums[i]] = i
 }
}


console.log(twoSum([2,7,11,15],9));
// console.log(JSON.stringify(twoSum([2,7,11,15],9)) === JSON.stringify([0,1]))
// console.log(JSON.stringify(twoSum([3,2,4],6)) === JSON.stringify([1,2]))
// console.log(JSON.stringify(twoSum([3,3],6)) === JSON.stringify([0,1]))