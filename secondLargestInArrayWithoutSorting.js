// Time Complexity - O(n)
function secondLargest(arr){
    const largestEle = largest(arr)
   // const filterWithoutLargest = arr.filter(ar => ar !== largestEle) // Space Complexity is O(n)
    const filterWithoutLargest = removeLargest(largestEle,arr) // Space Complexity is O(1)
    return largest(filterWithoutLargest)
}

// Time Complexity - O(n)
function largest(arr){
    let largest = 0
    for(let i= 0;i < arr.length;i++){
        if(arr[i] > largest){
            largest = arr[i]
        }
    }
    return largest
}

// This function for better space Complexity
function removeLargest(ele,arr){
    let removeIndex = 0
    for(let i = 0;i<arr.length;i++){
        if(ele === arr[i]){
            removeIndex = i;
            break
        }
    }
    arr.splice(removeIndex,1)
    return arr
}

// Time Complexity:
// The time complexity of this optimized code is O(n), where n is the length of the input array arr. It iterates through the array once.

// Space Complexity:
// The space complexity is O(1), or constant space. The algorithm uses a constant amount of extra space regardless of the size of the input array.

function secondLargest(arr){
    let largest = 0;
    let second_largest = 0;
    for(let i = 0;i < arr.length;i++){
        if(arr[i] > largest){
            second_largest = largest
            largest = arr[i]
        }else if(arr[i] > second_largest && arr[i] !== largest){
            second_largest = arr[i]
        }
    }
    return second_largest
}
console.log(secondLargest([1,5,2,7,8,3]));