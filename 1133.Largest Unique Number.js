function largestUnique(arr){
    let eleObj = {}
    for(let i = 0;i<arr.length;i++){
        if(eleObj[arr[i]]){
            eleObj[arr[i]] = eleObj[arr[i]]+ 1
        }else{
            eleObj[arr[i]] = 1
        }
    }
    let largest = -1
    for(let key in eleObj){
        if(eleObj[key] === 1 && parseInt(key) > largest){
            largest = parseInt(key)
        }
    }
    return largest
}

console.log(largestUnique([5,7,3,9,4,9,8,3,1]))