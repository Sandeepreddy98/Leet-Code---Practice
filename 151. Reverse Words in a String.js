var reverseWords = function(s) {
    let reversedArray = s.trim().split(' ').reverse()
    let removedEmptyArray = []
    for(let word of reversedArray){
        if(word !== ''){
            removedEmptyArray.push(word)
        }
    }
    return removedEmptyArray.join(' ')
};

console.log(reverseWords("a good   example"));