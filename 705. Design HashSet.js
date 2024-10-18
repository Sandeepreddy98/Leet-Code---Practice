// Design a HashSet without using any built-in hash table libraries.

// Implement MyHashSet class:

// void add(key) Inserts the value key into the HashSet.
// bool contains(key) Returns whether the value key exists in the HashSet or not.
// void remove(key) Removes the value key in the HashSet. If key does not exist in the HashSet, do nothing.
 

// Example 1:

// Input
// ["MyHashSet", "add", "add", "contains", "contains", "add", "contains", "remove", "contains"]
// [[], [1], [2], [1], [3], [2], [2], [2], [2]]
// Output
// [null, null, null, true, false, null, true, null, false]

// Explanation
// MyHashSet myHashSet = new MyHashSet();
// myHashSet.add(1);      // set = [1]
// myHashSet.add(2);      // set = [1, 2]
// myHashSet.contains(1); // return True
// myHashSet.contains(3); // return False, (not found)
// myHashSet.add(2);      // set = [1, 2]
// myHashSet.contains(2); // return True
// myHashSet.remove(2);   // set = [1]
// myHashSet.contains(2); // return False, (already removed)


class HashSet {
    constructor () {
        this.hashSet = {}
    }
    add (value){
        this.hashSet[value] = "hash"
        return this.keys()
    }
    
    remove(value){
        if(this.contains(value)){
        delete this.hashSet[value]
        this.keys()
        }else {
            return false
        }
    }

    contains(value){
        if(this.hashSet[value]){
            return true
        }else {
            return false
        }
    }

    keys(){
        let output = []
        for(let i = 0 ;i < Object.keys(this.hashSet) ; i++){
            output.push(parseInt(Object.keys(this.hashSet)[i]))
        }
        return output
    }
}

const myHashSet = new HashSet()
// console.log(myHashSet.add(1))
// myHashSet.remove(1)
// console.log(myHashSet.remove(1))
// myHashSet.add(2)
// console.log(myHashSet.contains(2));

class Hash {
    constructor() {
        this.array = []
    }

    add (value){
        if(!this.contains(value)){
            this.array.push(value)
        }
        return this.array
    }

    remove(value){
        let index = this.array.findIndex(ele => ele === value)
        if(index > -1){
            this.array.splice(index,1)
            return this.array
        }else {
            return false
        }
    }

    contains(value){
        return this.array.includes(value)
    }
}

const hash = new Hash()
console.log(hash.add(1))
console.log(hash.remove(1))
console.log(hash.remove(1))
console.log(hash.add(2))
console.log(hash.contains(2))