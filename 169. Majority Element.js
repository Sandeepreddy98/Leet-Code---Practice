var majorityElement = function(nums) {
    let charCount = {}
    for(let i = 0;i < nums.length;i++){
        if(charCount[nums[i]]){
            charCount[nums[i]] = charCount[nums[i]] + 1
        }else {
            charCount[nums[i]] = 1
        }
    }
    let max = 0
    let maxChar = ''
    for(let key in charCount){
        if(charCount[key] > max){
            maxChar = key
            max = charCount[key]
        }
    }
    return parseInt(maxChar)
};

console.log(majorityElement([3,2,3]))